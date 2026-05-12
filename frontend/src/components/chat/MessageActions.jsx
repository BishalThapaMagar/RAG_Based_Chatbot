import {
  Copy,
  RotateCcw,
  Pencil,
} from "lucide-react";

const MessageActions = () => {
  return (
    <div className="mt-2 flex items-center gap-1 opacity-0 transition group-hover:opacity-100">
      <button className="rounded-md p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
        <Copy size={15} />
      </button>

      <button className="rounded-md p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
        <RotateCcw size={15} />
      </button>

      <button className="rounded-md p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
        <Pencil size={15} />
      </button>
    </div>
  );
};

export default MessageActions;