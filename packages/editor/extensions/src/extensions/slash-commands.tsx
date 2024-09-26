import { useState, useEffect, useCallback, ReactNode, useRef, useLayoutEffect } from "react";
import { Editor, Range, Extension } from "@tiptap/core";
import Suggestion, { SuggestionOptions } from "@tiptap/suggestion";
import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";
import {
  CaseSensitive,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  ImageIcon,
  List,
  ListOrdered,
  ListTodo,
  MinusSquare,
  Quote,
  Table,
} from "lucide-react";
import {
  UploadImage,
  ISlashCommandItem,
  CommandProps,
  cn,
  insertTableCommand,
  toggleBlockquote,
  toggleBulletList,
  toggleOrderedList,
  toggleTaskList,
  insertImageCommand,
  toggleHeadingOne,
  toggleHeadingTwo,
  toggleHeadingThree,
} from "@prodkt/editor-core";

interface CommandItemProps {
  key: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export type SlashCommandOptions = {
  suggestion: Omit<SuggestionOptions, "editor">;
};

const Command = Extension.create<SlashCommandOptions>({
  name: "slash-command",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        command: ({ editor, range, props }: { editor: Editor; range: Range; props: any }) => {
          props.command({ editor, range });
        },
        allow({ editor }: { editor: Editor }) {
          const { selection } = editor.state;

          const parentNode = selection.$from.node(selection.$from.depth);
          const blockType = parentNode.type.name;

          if (blockType === "codeBlock") {
            return false;
          }

          if (editor.isActive("table")) {
            return false;
          }

          return true;
        },
      },
    };
  },
  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ];
  },
});

const getSuggestionItems =
  (uploadFile: UploadImage, additionalOptions?: Array<ISlashCommandItem>) =>
  ({ query }: { query: string }) => {
    let slashCommands: ISlashCommandItem[] = [
      {
        key: "text",
        title: "Text",
        description: "Just start typing with plain text.",
        searchTerms: ["p", "paragraph"],
        icon: <CaseSensitive className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => {
          if (range) {
            editor.chain().focus().deleteRange(range).clearNodes().run();
          }
          editor.chain().focus().clearNodes().run();
        },
      },
      {
        key: "heading_1",
        title: "Heading 1",
        description: "Big section heading.",
        searchTerms: ["title", "big", "large"],
        icon: <Heading1 className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => {
          toggleHeadingOne(editor, range);
        },
      },
      {
        key: "heading_2",
        title: "Heading 2",
        description: "Medium section heading.",
        searchTerms: ["subtitle", "medium"],
        icon: <Heading2 className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => {
          toggleHeadingTwo(editor, range);
        },
      },
      {
        key: "heading_3",
        title: "Heading 3",
        description: "Small section heading.",
        searchTerms: ["subtitle", "small"],
        icon: <Heading3 className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => {
          toggleHeadingThree(editor, range);
        },
      },
      {
        key: "todo_list",
        title: "To do",
        description: "Track tasks with a to-do list.",
        searchTerms: ["todo", "task", "list", "check", "checkbox"],
        icon: <ListTodo className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => {
          toggleTaskList(editor, range);
        },
      },
      {
        key: "bullet_list",
        title: "Bullet list",
        description: "Create a simple bullet list.",
        searchTerms: ["unordered", "point"],
        icon: <List className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => {
          toggleBulletList(editor, range);
        },
      },
      {
        key: "numbered_list",
        title: "Numbered list",
        description: "Create a list with numbering.",
        searchTerms: ["ordered"],
        icon: <ListOrdered className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => {
          toggleOrderedList(editor, range);
        },
      },
      {
        key: "table",
        title: "Table",
        description: "Create a table",
        searchTerms: ["table", "cell", "db", "data", "tabular"],
        icon: <Table className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => {
          insertTableCommand(editor, range);
        },
      },
      {
        key: "quote_block",
        title: "Quote",
        description: "Capture a quote.",
        searchTerms: ["blockquote"],
        icon: <Quote className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => toggleBlockquote(editor, range),
      },
      {
        key: "code_block",
        title: "Code",
        description: "Capture a code snippet.",
        searchTerms: ["codeblock"],
        icon: <Code2 className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) =>
          editor
            .chain()
            .focus()
            .deleteRange(range)
            // @ts-expect-error I have to move this to the core
            .toggleCodeBlock()
            .run(),
      },
      {
        key: "image",
        title: "Image",
        description: "Upload an image from your computer.",
        searchTerms: ["img", "photo", "picture", "media"],
        icon: <ImageIcon className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => {
          insertImageCommand(editor, uploadFile, null, range);
        },
      },
      {
        key: "divider",
        title: "Divider",
        description: "Visually divide blocks.",
        searchTerms: ["line", "divider", "horizontal", "rule", "separate"],
        icon: <MinusSquare className="h-3.5 w-3.5" />,
        command: ({ editor, range }: CommandProps) => {
          // @ts-expect-error I have to move this to the core
          editor.chain().focus().deleteRange(range).setHorizontalRule().run();
        },
      },
    ];

    if (additionalOptions) {
      additionalOptions.map((item) => {
        slashCommands.push(item);
      });
    }

    slashCommands = slashCommands.filter((item) => {
      if (typeof query === "string" && query.length > 0) {
        const search = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search) ||
          item.searchTerms?.some((term: string) => term.includes(search))
        );
      }
      return true;
    });

    return slashCommands;
  };

export const updateScrollView = (container: HTMLElement, item: HTMLElement) => {
  const containerHeight = container.offsetHeight;
  const itemHeight = item ? item.offsetHeight : 0;

  const top = item.offsetTop;
  const bottom = top + itemHeight;

  if (top < container.scrollTop) {
    container.scrollTop -= container.scrollTop - top + 5;
  } else if (bottom > containerHeight + container.scrollTop) {
    container.scrollTop += bottom - containerHeight - container.scrollTop + 5;
  }
};

const CommandList = ({ items, command }: { items: CommandItemProps[]; command: any; editor: any; range: any }) => {
  // states
  const [selectedIndex, setSelectedIndex] = useState(0);
  // refs
  const commandListContainer = useRef<HTMLDivElement>(null);

  const selectItem = useCallback(
    (index: number) => {
      const item = items[index];
      if (item) command(item);
    },
    [command, items]
  );

  useEffect(() => {
    const navigationKeys = ["ArrowUp", "ArrowDown", "Enter"];
    const onKeyDown = (e: KeyboardEvent) => {
      if (navigationKeys.includes(e.key)) {
        e.preventDefault();
        if (e.key === "ArrowUp") {
          setSelectedIndex((selectedIndex + items.length - 1) % items.length);
          return true;
        }
        if (e.key === "ArrowDown") {
          setSelectedIndex((selectedIndex + 1) % items.length);
          return true;
        }
        if (e.key === "Enter") {
          selectItem(selectedIndex);
          return true;
        }
        return false;
      }
      return;
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [items, selectedIndex, setSelectedIndex, selectItem]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);

  useLayoutEffect(() => {
    const container = commandListContainer?.current;

    const item = container?.children[selectedIndex] as HTMLElement;

    if (item && container) updateScrollView(container, item);
  }, [selectedIndex]);

  if (items.length <= 0) return null;

  return (
    <div
      id="slash-command"
      ref={commandListContainer}
      className="z-10 max-h-80 min-w-[12rem] overflow-y-auto rounded-md border-[0.5px] border-custom-border-300 bg-custom-background-100 px-2 py-2.5 shadow-custom-shadow-rg"
    >
      {items.map((item, index) => (
        <button
          key={item.key}
          className={cn(
            "flex items-center gap-2 w-full rounded px-1 py-1.5 text-sm text-left truncate text-custom-text-200 hover:bg-custom-background-80",
            {
              "bg-custom-background-80": index === selectedIndex,
            }
          )}
          onClick={(e) => {
            e.stopPropagation();
            selectItem(index);
          }}
        >
          <span className="grid place-items-center flex-shrink-0">{item.icon}</span>
          <p className="flex-grow truncate">{item.title}</p>
        </button>
      ))}
    </div>
  );
};

interface CommandListInstance {
  onKeyDown: (props: { event: KeyboardEvent }) => boolean;
}

const renderItems = () => {
  let component: ReactRenderer<CommandListInstance, typeof CommandList> | null = null;
  let popup: any | null = null;
  return {
    onStart: (props: { editor: Editor; clientRect?: (() => DOMRect | null) | null }) => {
      // @ts-expect-error I have to move this to the core
      component = new ReactRenderer(CommandList, {
        props: {
          items: [],
          command: null,
          editor: props.editor,
          range: null,
        },
        editor: props.editor,
      });

      const tippyContainer = document.querySelector(".active-editor") ?? document.querySelector("#editor-container");

      if (!tippyContainer) {
        console.error("No container found for tippy");
        return;
      }
      // @ts-expect-error ts doesn't like this
      popup = tippy("body", {
        getReferenceClientRect: () => props.clientRect?.() ?? null,
        appendTo: () => tippyContainer,
        content: component?.element ?? undefined,
        showOnCreate: true,
        interactive: true,
        trigger: "manual",
        placement: "bottom-start",
      });
    },
    onUpdate: (props: { editor: Editor; clientRect?: (() => DOMRect | null) | null }) => {
      component?.updateProps(props);

      popup?.[0].setProps({
        getReferenceClientRect: props.clientRect,
      });
    },
    onKeyDown: (props: { event: KeyboardEvent }) => {
      if (props.event.key === "Escape") {
        popup?.[0].hide();

        return true;
      }

      if (component?.ref?.onKeyDown(props)) {
        return true;
      }
      return false;
    },
    onExit: () => {
      popup?.[0].destroy();
      component?.destroy();
    },
  };
};

export const SlashCommand = (uploadFile: UploadImage, additionalOptions?: Array<ISlashCommandItem>) =>
  Command.configure({
    suggestion: {
      items: getSuggestionItems(uploadFile, additionalOptions),
      render: renderItems,
    },
  });
