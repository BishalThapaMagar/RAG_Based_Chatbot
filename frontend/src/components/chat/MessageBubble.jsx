import MessageActions from "./MessageActions";

import MarkdownRenderer from "../message/MarkdownRenderer";

const MessageBubble = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`group flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div className="flex max-w-[85%] flex-col">
        {/* USER MESSAGE */}
        {isUser ? (
          <div className="rounded-2xl bg-blue-600 px-4 py-3 text-sm leading-relaxed text-white">
            {message.content}
          </div>
        ) : (
          <>
            {/* ASSISTANT MESSAGE */}
            <div className="text-sm leading-relaxed text-zinc-200">
              <MarkdownRenderer
                content={message.content}
              />
            </div>

            {/* ACTIONS */}
            <MessageActions />
          </>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;