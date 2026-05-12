import { createSlice } from "@reduxjs/toolkit";

const defaultConversationId = crypto.randomUUID();

const initialState = {
  conversations: [
    {
      id: defaultConversationId,

      title: "New Chat",

      messages: [],
    },
  ],

  activeConversationId: defaultConversationId,
};

const conversationSlice = createSlice({
  name: "conversations",

  initialState,

  reducers: {
    // CREATE CHAT
    createConversation: (state) => {
      const newConversation = {
        id: crypto.randomUUID(),

        title: "New Chat",

        messages: [],
      };

      state.conversations.unshift(
        newConversation
      );

      state.activeConversationId =
        newConversation.id;
    },

    // SET ACTIVE
    setActiveConversation: (
      state,
      action
    ) => {
      state.activeConversationId =
        action.payload;
    },

    // ADD MESSAGE
    addMessageToConversation: (
      state,
      action
    ) => {
      const { conversationId, message } =
        action.payload;

      const conversation =
        state.conversations.find(
          (conv) =>
            conv.id === conversationId
        );

      if (conversation) {
        conversation.messages.push(message);

        // AUTO TITLE
        if (
          conversation.messages.length ===
            1 &&
          message.role === "user"
        ) {
          conversation.title =
            message.content.slice(0, 30);
        }
      }
    },

    // STREAM UPDATE MESSAGE
    updateMessageInConversation: (
      state,
      action
    ) => {

      const {
        conversationId,
        messageId,
        content,
      } = action.payload;

      const conversation =
        state.conversations.find(
          (conv) =>
            conv.id === conversationId
        );

      if (!conversation) return;

      const message =
        conversation.messages.find(
          (msg) =>
            msg.id === messageId
        );

      if (!message) return;

      // STREAM APPEND
      message.content += content;
    },
    // DELETE CHAT
    deleteConversation: (
      state,
      action
    ) => {
      state.conversations =
        state.conversations.filter(
          (conv) =>
            conv.id !== action.payload
        );

      if (
        state.activeConversationId ===
        action.payload
      ) {
        state.activeConversationId =
          state.conversations[0]?.id || null;
      }
    },

    // RENAME CHAT
    renameConversation: (
      state,
      action
    ) => {
      const { id, title } =
        action.payload;

      const conversation =
        state.conversations.find(
          (conv) => conv.id === id
        );

      if (conversation) {
        conversation.title = title;
      }
    },
  },
});

export const {
  createConversation,
  setActiveConversation,
  addMessageToConversation,
  updateMessageInConversation,
  deleteConversation,
  renameConversation,
} = conversationSlice.actions;

export default conversationSlice.reducer;