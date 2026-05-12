// =========================================
// src/components/chat/Chat.jsx
// =========================================

import { useEffect, useRef, useState } from "react";

import { useChat } from "../../features/chat/useChat";

const Chat = () => {
  const [input, setInput] = useState("");

  const { messages, sendMessage, loading } =
    useChat();

  const bottomRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    await sendMessage(input);

    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex h-full flex-col">
      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm md:text-base ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-800 text-zinc-100"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-zinc-400">
              AI is thinking...
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* INPUT AREA */}
      <div className="border-t border-zinc-700 bg-[#212121] p-4">
        <div className="mx-auto flex max-w-4xl gap-3">
          <input
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          <button
            onClick={handleSend}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;