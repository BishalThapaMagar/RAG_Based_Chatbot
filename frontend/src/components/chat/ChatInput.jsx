import { useState } from "react";

import UploadButton from "../upload/UploadButton";
import FilePreview from "../upload/FilePreview";
import UploadProgress from "../upload/UploadProgress";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    onSend(input);

    setInput("");
  };

  return (
    <div className="border-t border-zinc-800 bg-[#212121] px-5 py-3">
      <div className="mx-auto max-w-4xl">
        {/* FILES */}
        <FilePreview />

        {/* PROGRESS */}
        <UploadProgress />

        {/* INPUT BOX */}
        <div className="flex items-end gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-3 py-2">
          {/* UPLOAD */}
          <UploadButton />

          {/* TEXTAREA */}
          <textarea
            rows={1}
            value={input}
            placeholder="Ask anything..."
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                !e.shiftKey
              ) {
                e.preventDefault();

                handleSend();
              }
            }}
            className="h-6 max-h-[200px] flex-1 resize-none bg-transparent text-sm leading-3 text-white outline-none placeholder:text-zinc-500"
          />

          {/* SEND */}
          <button
            onClick={handleSend}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19V5m0 0-6 6m6-6 6 6"
              />
            </svg>
          </button>
        </div>

        <p className="mt-2 text-center text-[11px] text-zinc-500">
          AI can make mistakes. Verify important
          information.
        </p>
      </div>
    </div>
  );
};

export default ChatInput;