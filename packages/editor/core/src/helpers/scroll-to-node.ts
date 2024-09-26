import type { Editor } from "@tiptap/react";

export interface IMarking {
  type: "heading";
  level: number;
  text: string;
  sequence: number;
}

function findNthH1(editor: Editor, level?: number): number {
  let pos = 0;
  editor.state.doc.descendants((node, position) => {
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    if (node.type.name === "heading" && node.attrs["level"] === level) {
      pos = position;
      return false; // Stop traversal when matching heading is found
    }
    return true;
  });
  return pos;
}

function scrollToNode(editor: Editor, pos: number): void {
  const headingNode = editor.state.doc.nodeAt(pos);
  if (headingNode) {
    const headingDOM = editor.view.nodeDOM(pos);
    if (headingDOM instanceof HTMLElement) {
      headingDOM.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export function scrollSummary(editor: Editor, marking: IMarking) {
  if (editor) {
    const pos = findNthH1(editor, marking.level);
    scrollToNode(editor, pos);
  }
}
