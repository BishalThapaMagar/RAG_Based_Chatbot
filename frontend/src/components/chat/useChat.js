// =========================================
// src/features/chat/useChat.js
// =========================================

import { useState } from "react";

import { sendMessageAPI } from "./chatAPI";

export const useChat = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello 👋 How can I help you today?",
    },
  ]);

  const [loading, setLoading] =
    useState(false);

  const sendMessage = async (text) => {
    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    try {
      setLoading(true);

      const response =
        await sendMessageAPI(text);

      const assistantMessage = {
        role: "assistant",
        content: response.reply,
      };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    loading,
  };
};