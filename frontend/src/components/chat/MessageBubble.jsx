import MessageActions from "./MessageActions";

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
        {/* MESSAGE */}
        <div
          className={`text-sm leading-relaxed ${
            isUser
              ? "rounded-2xl bg-blue-600 px-4 py-3 text-white"
              : "text-zinc-200"
          }`}
        >
          {message.content}
        </div>

        {/* ACTIONS */}
        {!isUser && <MessageActions />}
      </div>
    </div>
  );
};

export default MessageBubble;