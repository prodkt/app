import { useEditor as useCustomEditor, type Editor } from "@tiptap/react";
import { useImperativeHandle, useRef, type MutableRefObject, useState, useEffect } from "react";
import { CoreEditorProps } from "@/ui/props";
import { CoreEditorExtensions } from "@/ui/extensions";
import type { EditorProps } from "@tiptap/pm/view";
import type { DeleteImage } from "@/types/delete-image";
import type { IMentionHighlight, IMentionSuggestion } from "@/types/mention-suggestion";
import type { RestoreImage } from "@/types/restore-image";
import type { UploadImage } from "@/types/upload-image";
import type { Selection } from "@tiptap/pm/state";
import { insertContentAtSavedSelection } from "@/helpers/insert-content-at-cursor-position";
import { type EditorMenuItemNames, getEditorMenuItems } from "@/ui/menus/menu-items";
import type { EditorRefApi } from "@/types/editor-ref-api";
import { type IMarking, scrollSummary } from "@/helpers/scroll-to-node";

export type TFileHandler = {
  cancel: () => void;
  delete: DeleteImage;
  upload: UploadImage;
  restore: RestoreImage;
};

export interface CustomEditorProps {
  id?: string;
  fileHandler: TFileHandler;
  initialValue?: string;
  editorClassName: string;
  // undefined when prop is not passed, null if intentionally passed to stop
  // swr syncing
  value?: string | null | undefined;
  onChange?: (json: object, html: string) => void;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  extensions?: any;
  editorProps?: EditorProps;
  forwardedRef?: MutableRefObject<EditorRefApi | null>;
  mentionHandler: {
    highlights: () => Promise<IMentionHighlight[]>;
    suggestions?: () => Promise<IMentionSuggestion[]>;
  };
  handleEditorReady?: (value: boolean) => void;
  placeholder: string | ((isFocused: boolean, value: string) => string) | undefined;
  tabIndex?: number;
}

export const useEditor = ({
  id = "",
  editorProps = {},
  initialValue,
  editorClassName,
  value,
  extensions = [],
  fileHandler,
  onChange,
  forwardedRef,
  tabIndex,
  handleEditorReady,
  mentionHandler,
  placeholder,
}: CustomEditorProps) => {
  const editor = useCustomEditor({
    editorProps: {
      ...CoreEditorProps(editorClassName),
      ...editorProps,
    },
    extensions: [
      ...CoreEditorExtensions({
        mentionConfig: {
          mentionSuggestions: mentionHandler.suggestions as () => Promise<IMentionSuggestion[]>,
          mentionHighlights: mentionHandler.highlights as () => Promise<IMentionHighlight[]>,
        },
        fileConfig: {
          uploadFile: fileHandler.upload,
          deleteFile: fileHandler.delete,
          restoreFile: fileHandler.restore,
          cancelUploadImage: fileHandler.cancel,
        },
        placeholder: placeholder as NonNullable<typeof placeholder>,
        tabIndex: tabIndex as NonNullable<typeof tabIndex>,
      }),
      ...extensions,
    ],
    content: typeof initialValue === "string" && initialValue.trim() !== "" ? initialValue : "<p></p>",
    onCreate: async () => {
      handleEditorReady?.(true);
    },
    onTransaction: async ({ editor }) => {
      setSavedSelection(editor.state.selection);
    },
    onUpdate: async ({ editor }) => {
      onChange?.(editor.getJSON(), editor.getHTML());
    },
    onDestroy: async () => {
      handleEditorReady?.(false);
    },
  });

  const editorRef: MutableRefObject<Editor | null> = useRef(null);

  const [savedSelection, setSavedSelection] = useState<Selection | null>(null);

  // Inside your component or hook
  const savedSelectionRef = useRef(savedSelection);

  // Update the ref whenever savedSelection changes
  useEffect(() => {
    savedSelectionRef.current = savedSelection;
  }, [savedSelection]);

  // Effect for syncing SWR data
  useEffect(() => {
    // value is null when intentionally passed where syncing is not yet
    // supported and value is undefined when the data from swr is not populated
    if (value === null || value === undefined) return;
    if (
      editor &&
      !editor.isDestroyed &&
      // biome-ignore lint/complexity/useLiteralKeys: <explanation>
      !editor.storage["image"].uploadInProgress
    ) {
      try {
        editor.commands.setContent(value, false, {
          preserveWhitespace: "full",
        });
        const currentSavedSelection = savedSelectionRef.current;
        if (currentSavedSelection) {
          const docLength = editor.state.doc.content.size;
          const relativePosition = Math.min(currentSavedSelection.from, docLength - 1);
          editor.commands.setTextSelection(relativePosition);
        }
      } catch (error) {
        console.error("Error syncing editor content with external value:", error);
      }
    }
  }, [editor, value, id]);

  useImperativeHandle(
    forwardedRef,
    () => ({
      clearEditor: () => {
        editorRef.current?.commands.clearContent();
      },
      setEditorValue: (content: string) => {
        editorRef.current?.commands.setContent(content);
      },
      setEditorValueAtCursorPosition: (content: string) => {
        if (savedSelection) {
          insertContentAtSavedSelection(editorRef, content, savedSelection);
        }
      },
      executeMenuItemCommand: (itemName: EditorMenuItemNames) => {
        const editorItems = getEditorMenuItems(editorRef.current, fileHandler.upload);

        const getEditorMenuItem = (itemName: EditorMenuItemNames) => editorItems.find((item) => item.key === itemName);

        const item = getEditorMenuItem(itemName);
        if (item) {
          if (item.key === "image") {
            item.command(savedSelectionRef.current);
          } else {
            item.command();
          }
        } else {
          console.warn(`No command found for item: ${itemName}`);
        }
      },
      isMenuItemActive: (itemName: EditorMenuItemNames): boolean => {
        const editorItems = getEditorMenuItems(editorRef.current, fileHandler.upload);

        const getEditorMenuItem = (itemName: EditorMenuItemNames) => editorItems.find((item) => item.key === itemName);
        const item = getEditorMenuItem(itemName);
        return item ? item.isActive() : false;
      },
      onStateChange: (callback: () => void) => {
        // Subscribe to editor state changes
        editorRef.current?.on("transaction", () => {
          callback();
        });
        // Return a function to unsubscribe to the continuous transactions of
        // the editor on unmounting the component that has subscribed to this
        // method
        return () => {
          editorRef.current?.off("transaction");
        };
      },
      getMarkDown: (): string => {
        const markdownOutput =
          // biome-ignore lint/complexity/useLiteralKeys: <explanation>
          editorRef.current?.storage["markdown"].getMarkdown();
        return markdownOutput;
      },
      getHTML: (): string => {
        const htmlOutput = editorRef.current?.getHTML() ?? "<p></p>";
        return htmlOutput;
      },
      scrollSummary: (marking: IMarking): void => {
        if (!editorRef.current) return;
        scrollSummary(editorRef.current, marking);
      },
      isEditorReadyToDiscard: () =>
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        editorRef.current?.storage["image"].uploadInProgress === false,
      setFocusAtPosition: (position: number) => {
        if (!editorRef.current || editorRef.current.isDestroyed) {
          console.error("Editor reference is not available or has been destroyed.");
          return;
        }
        try {
          const docSize = editorRef.current.state.doc.content.size;
          const safePosition = Math.max(0, Math.min(position, docSize));
          editorRef.current
            .chain()
            .insertContentAt(safePosition, [{ type: "paragraph" }])
            .focus()
            .run();
        } catch (error) {
          console.error("An error occurred while setting focus at position:", error);
        }
      },
    }),
    [editorRef, savedSelection, fileHandler.upload]
  );

  if (!editor) {
    return null;
  }

  // the editorRef is used to access the editor instance from outside the hook
  // and should only be used after editor is initialized
  editorRef.current = editor;

  return editor;
};
