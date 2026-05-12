import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  createConversation,
  setActiveConversation,
  deleteConversation,
  renameConversation,
} from "./conversationSlice";

const useConversations = () => {
  const dispatch = useDispatch();

  const conversations = useSelector(
    (state) =>
      state.conversations.conversations
  );

  const activeConversationId =
    useSelector(
      (state) =>
        state.conversations
          .activeConversationId
    );

  const activeConversation =
    conversations.find(
      (conv) =>
        conv.id === activeConversationId
    );

  return {
    conversations,

    activeConversation,

    activeConversationId,

    createNewConversation: () =>
      dispatch(createConversation()),

    setConversation: (id) =>
      dispatch(setActiveConversation(id)),

    deleteChat: (id) =>
      dispatch(deleteConversation(id)),

    renameChat: (id, title) =>
      dispatch(
        renameConversation({
          id,
          title,
        })
      ),
  };
};

export default useConversations;