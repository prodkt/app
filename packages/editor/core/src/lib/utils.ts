import { Extensions, generateJSON, getSchema } from "@tiptap/core";
import { Selection } from "@tiptap/pm/state";
import { clsx, type ClassValue } from "clsx";
import { CoreEditorExtensionsWithoutProps } from "src/ui/extensions/core-without-props";
import { twMerge } from "tailwind-merge";
interface EditorClassNames {
  noBorder?: boolean;
  borderOnFocus?: boolean;
  containerClassName?: string;
}

export const getEditorClassNames = ({ noBorder, borderOnFocus, containerClassName }: EditorClassNames) =>
  cn(
    "w-full max-w-full sm:rounded-lg focus:outline-none focus:border-0",
    {
      "border border-custom-border-200": !noBorder,
      "focus:border border-custom-border-300": borderOnFocus,
    },
    containerClassName
  );

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to find the parent node of a specific type
export function findParentNodeOfType(selection: Selection, typeName: string) {
  let depth = selection.$anchor.depth;
  while (depth > 0) {
    const node = selection.$anchor.node(depth);
    if (node.type.name === typeName) {
      return { node, pos: selection.$anchor.start(depth) - 1 };
    }
    depth--;
  }
  return null;
}

export const findTableAncestor = (node: Node | null): HTMLTableElement | null => {
  while (node !== null && node.nodeName !== "TABLE") {
    node = node.parentNode;
  }
  return node as HTMLTableElement;
};

export const getTrimmedHTML = (html: string) => {
  html = html.replace(/^(<p><\/p>)+/, "");
  html = html.replace(/(<p><\/p>)+$/, "");
  return html;
};

export const isValidHttpUrl = (string: string): boolean => {
  let url: URL;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

/**
 * @description return an object with contentJSON and editorSchema
 * @description contentJSON- ProseMirror JSON from HTML content
 * @description editorSchema- editor schema from extensions
 * @param {string} html
 * @returns {object} {contentJSON, editorSchema}
 */
export const generateJSONfromHTML = (html: string) => {
  const extensions = CoreEditorExtensionsWithoutProps();
  const contentJSON = generateJSON(html ?? "<p></p>", extensions as Extensions);
  const editorSchema = getSchema(extensions as Extensions);
  return {
    contentJSON,
    editorSchema,
  };
};
