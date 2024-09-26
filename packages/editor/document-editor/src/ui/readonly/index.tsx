import { forwardRef, type MutableRefObject } from "react";
import {
  type EditorReadOnlyRefApi,
  getEditorClassNames,
  type IMentionHighlight,
  useReadOnlyEditor,
} from "@prodkt/editor-core";
// components
import { PageRenderer } from "src/ui/components/page-renderer";
import { IssueWidgetPlaceholder } from "../extensions/widgets/issue-embed-widget";

interface IDocumentReadOnlyEditor {
  initialValue: string;
  containerClassName: string;
  editorClassName?: string;
  tabIndex?: number;
  handleEditorReady?: (value: boolean) => void;
  mentionHandler: {
    highlights: () => Promise<IMentionHighlight[]>;
  };
  forwardedRef?: MutableRefObject<EditorReadOnlyRefApi | null>;
}

const DocumentReadOnlyEditor = (props: IDocumentReadOnlyEditor) => {
  const {
    containerClassName,
    editorClassName = "",
    initialValue,
    forwardedRef,
    tabIndex,
    handleEditorReady,
    mentionHandler,
  } = props;
  const editor = useReadOnlyEditor({
    initialValue,
    editorClassName,
    mentionHandler,
    forwardedRef: forwardedRef || { current: null },
    handleEditorReady: handleEditorReady || (() => {}),
    extensions: [IssueWidgetPlaceholder()],
  });

  if (!editor) {
    return null;
  }

  const editorContainerClassName = getEditorClassNames({
    containerClassName,
  });

  return <PageRenderer tabIndex={tabIndex ?? 0} editor={editor} editorContainerClassName={editorContainerClassName} />;
};

const DocumentReadOnlyEditorWithRef = forwardRef<EditorReadOnlyRefApi, IDocumentReadOnlyEditor>((props, ref) => (
  <DocumentReadOnlyEditor {...props} forwardedRef={ref as MutableRefObject<EditorReadOnlyRefApi | null>} />
));

DocumentReadOnlyEditorWithRef.displayName = "DocumentReadOnlyEditorWithRef";

export { DocumentReadOnlyEditor, DocumentReadOnlyEditorWithRef };
