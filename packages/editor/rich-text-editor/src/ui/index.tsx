"use client";
import * as React from "react";
// editor-core
import {
  EditorContainer,
  EditorContentWrapper,
  getEditorClassNames,
  type IMentionHighlight,
  type IMentionSuggestion,
  useEditor,
  type EditorRefApi,
  type TFileHandler,
} from "@prodkt/editor-core";
// extensions
import { RichTextEditorExtensions } from "src/ui/extensions";
// components
import { EditorBubbleMenu } from "src/ui/menus/bubble-menu";

export type IRichTextEditor = {
  initialValue: string;
  value?: string | null;
  dragDropEnabled?: boolean;
  fileHandler: TFileHandler;
  id?: string;
  containerClassName?: string;
  editorClassName?: string;
  onChange?: (json: object, html: string) => void;
  forwardedRef?: React.MutableRefObject<EditorRefApi | null>;
  debouncedUpdatesEnabled?: boolean;
  mentionHandler: {
    highlights: () => Promise<IMentionHighlight[]>;
    suggestions: () => Promise<IMentionSuggestion[]>;
  };
  placeholder?: string | ((isFocused: boolean, value: string) => string);
  tabIndex?: number;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onEnterKeyPress?: (e?: any) => void;
};

const RichTextEditor = (props: IRichTextEditor) => {
  const {
    onChange,
    dragDropEnabled,
    initialValue,
    value,
    fileHandler,
    forwardedRef,
    containerClassName,
    editorClassName = "",
    // rerenderOnPropsChange,
    id = "",
    placeholder,
    tabIndex = 0,
    mentionHandler,
    onEnterKeyPress,
  } = props;

  const [hideDragHandleOnMouseLeave, setHideDragHandleOnMouseLeave] = React.useState<() => void>(() => {});

  // this essentially sets the hideDragHandle function from the DragAndDrop extension as the Plugin
  // loads such that we can invoke it from react when the cursor leaves the container
  const setHideDragHandleFunction = (hideDragHandlerFromDragDrop: () => void) => {
    setHideDragHandleOnMouseLeave(() => hideDragHandlerFromDragDrop);
  };

  const editor = useEditor({
    id,
    editorClassName,
    fileHandler,
    onChange: onChange ?? (() => {}),
    initialValue,
    value,
    forwardedRef: forwardedRef || { current: null },
    extensions: RichTextEditorExtensions({
      uploadFile: fileHandler.upload,
      dragDropEnabled: dragDropEnabled ?? false,
      setHideDragHandle: setHideDragHandleFunction,
      onEnterKeyPress: onEnterKeyPress || (() => {}),
    }),
    tabIndex,
    mentionHandler,
    placeholder,
  });

  const editorContainerClassName = getEditorClassNames({
    noBorder: true,
    borderOnFocus: false,
    containerClassName: containerClassName || "",
  });

  if (!editor) return null;

  return (
    <EditorContainer
      hideDragHandle={hideDragHandleOnMouseLeave}
      editor={editor}
      editorContainerClassName={editorContainerClassName}
    >
      {editor && <EditorBubbleMenu editor={editor} />}
      <div className="flex flex-col">
        <EditorContentWrapper tabIndex={tabIndex} editor={editor} />
      </div>
    </EditorContainer>
  );
};

const RichTextEditorWithRef = React.forwardRef<EditorRefApi, IRichTextEditor>((props, ref) => (
  <RichTextEditor {...props} forwardedRef={ref as React.MutableRefObject<EditorRefApi | null>} />
));

RichTextEditorWithRef.displayName = "RichTextEditorWithRef";

export { RichTextEditor, RichTextEditorWithRef };
