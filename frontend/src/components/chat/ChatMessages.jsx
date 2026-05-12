import MessageBubble from "./MessageBubble";

const ChatMessages = ({ messages }) => {
  return (
    <div className="flex flex-col gap-5">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
};

export default ChatMessages;