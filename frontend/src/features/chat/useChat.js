import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  setTyping,
} from "./chatSlice";

import useUpload from "../upload/useUpload";

import { generateMessageId } from "./chatUtils";

import {
  addMessageToConversation,

  updateMessageInConversation,
} from "../conversations/conversationSlice";

import { streamResponse } from "../../services/stream";

const useChat = () => {
  const dispatch = useDispatch();

  const isTyping = useSelector(
    (state) => state.chat.isTyping
  );

  const activeConversationId =
    useSelector(
      (state) =>
        state.conversations
          .activeConversationId
    );

  const conversations = useSelector(
    (state) =>
      state.conversations.conversations
  );

  const activeConversation =
    conversations.find(
      (conv) =>
        conv.id === activeConversationId
    );

  const messages =
    activeConversation?.messages || [];

  const {
    files,
    uploadFiles,
  } = useUpload();

  // SEND MESSAGE
  const sendMessage = async (text) => {
    if (
      !text.trim() ||
      !activeConversationId
    )
      return;

    // USER MESSAGE
    const userMessage = {
      id: generateMessageId(),

      role: "user",

      content: text,
    };

    dispatch(
      addMessageToConversation({
        conversationId:
          activeConversationId,

        message: userMessage,
      })
    );

    // EMPTY ASSISTANT MESSAGE
    const assistantMessageId =
      generateMessageId();

    dispatch(
      addMessageToConversation({
        conversationId:
          activeConversationId,

        message: {
          id: assistantMessageId,

          role: "assistant",

          content: "",
        },
      })
    );

    try {
      if (files.length > 0) {
        try {
          await uploadFiles();
        } catch (uploadError) {
          console.error(
            "File upload failed",
            uploadError
          );
          dispatch(setTyping(false));
          return;
        }
      }

      dispatch(setTyping(true));

      // STREAM RESPONSE
      await streamResponse({
        message: text,

        onChunk: (chunk) => {
          dispatch(
            updateMessageInConversation({
              conversationId:
                activeConversationId,

              messageId:
                assistantMessageId,

              content: chunk,
            })
          );
        },

        onComplete: () => {
          dispatch(setTyping(false));
        },

        onError: () => {
          dispatch(setTyping(false));
        },
      });
    } catch (error) {
      console.error(error);

      dispatch(setTyping(false));
    }
  };

  return {
    messages,

    isTyping,

    sendMessage,
  };
};

export default useChat;