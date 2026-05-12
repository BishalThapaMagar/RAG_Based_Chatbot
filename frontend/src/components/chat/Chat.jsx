import { useEffect, useRef } from "react";

import useChat from "../../features/chat/useChat";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import EmptyState from "./EmptyState";
import TypingIndicator from "./TypingIndicator";

import FileDropzone from "../upload/FileDropzone";

const Chat = () => {
  const {
    messages,
    isTyping,
    sendMessage,
  } = useChat();

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <FileDropzone>
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

            <div ref={bottomRef} />
          </div>
        </div>

        {/* INPUT */}
        <ChatInput onSend={sendMessage} />
      </div>
    </FileDropzone>
  );
};

export default Chat;