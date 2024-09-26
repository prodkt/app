import type { UploadImage } from "@prodkt/editor-core";
import { DragAndDrop, SlashCommand } from "@prodkt/editor-extensions";
import { EnterKeyExtension } from "./enter-key-extension";

type TArguments = {
  uploadFile: UploadImage;
  dragDropEnabled?: boolean;
  setHideDragHandle?: (hideDragHandlerFromDragDrop: () => void) => void;
  onEnterKeyPress?: () => void;
};

export const RichTextEditorExtensions = ({
  uploadFile,
  dragDropEnabled,
  setHideDragHandle,
  onEnterKeyPress,
}: TArguments) => [
  SlashCommand(uploadFile),
  dragDropEnabled === true && DragAndDrop(setHideDragHandle),
  // TODO; add the extension conditionally for forms that don't require it
  // EnterKeyExtension(onEnterKeyPress),
];
