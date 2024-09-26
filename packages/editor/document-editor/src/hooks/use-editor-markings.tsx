import { useCallback, useState } from "react";
import type { IMarking } from "src/types/editor-types";

export const useEditorMarkings = () => {
  const [markings, setMarkings] = useState<IMarking[]>([]);

  const updateMarkings = useCallback((html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const headings = doc.querySelectorAll("h1, h2, h3");
    const tempMarkings: IMarking[] = [];
    let h1Sequence = 0;
    let h2Sequence = 0;
    let h3Sequence = 0;

    for (const heading of headings) {
      const level = Number.parseInt(heading.tagName?.[1] ?? "0");
      tempMarkings.push({
        type: "heading",
        level: level,
        text: heading.textContent || "",
        sequence: level === 1 ? ++h1Sequence : level === 2 ? ++h2Sequence : ++h3Sequence,
      });
    }

    setMarkings(tempMarkings);
  }, []);

  return {
    updateMarkings,
    markings,
  };
};
