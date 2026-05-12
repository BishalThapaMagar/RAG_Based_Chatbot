export const getConversationById = (
  conversations,
  id
) => {
  return conversations.find(
    (conv) => conv.id === id
  );
};