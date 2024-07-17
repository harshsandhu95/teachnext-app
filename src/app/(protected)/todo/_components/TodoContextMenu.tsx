import { Trash2Icon } from "lucide-react";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
} from "@/components/ui/ContextMenu";

interface Props {
  id: string;
  handleRemove: (id: string) => void;
}

export default function TodoContextMenu({ id, handleRemove }: Props) {
  return (
    <ContextMenuContent className="p-4 w-64">
      <ContextMenuItem onClick={() => handleRemove(id)}>
        Delete
        <ContextMenuShortcut>
          <Trash2Icon size={14} />
        </ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  );
}
