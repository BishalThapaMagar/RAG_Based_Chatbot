import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import EmptyState from "./EmptyState";
import TypingIndicator from "./TypingIndicator";

const Chat = () => {
  // TEMP MOCK DATA
  const messages = [
    {
      id: 1,
      role: "assistant",
      content:
        "Hello 👋 Upload your PDFs and ask me anything about them.",
    },

    {
      id: 2,
      role: "user",
      content:
        "Explain transformers architecture",
    },
  ];

  const isTyping = false;

  return (
    <div className="flex h-full flex-col">
      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto flex max-w-4xl flex-col">
          {messages.length === 0 ? (
            <EmptyState />
          ) : (
            <ChatMessages messages={messages} />
          )}

          {isTyping && <TypingIndicator />}
        </div>
      </div>

      {/* INPUT */}
      <ChatInput />
    </div>
  );
};

export default Chat;