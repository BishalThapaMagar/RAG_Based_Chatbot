import { configureStore } from "@reduxjs/toolkit";

import chatReducer from "../features/chat/chatSlice";

import uploadReducer from "../features/upload/uploadSlice";

import conversationReducer from "../features/conversations/conversationSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,

    upload: uploadReducer,

    conversations: conversationReducer,
  },
});