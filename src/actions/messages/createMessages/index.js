const insertMessages = require("./queries/insertMessages");

const createMessages = async ({
  senderId,
  receiverId,
  messageText,
  isRead,
  createdAt
}) => {
  const insertedMessageId = await insertMessages({
    senderId,
    receiverId,
    messageText,
    isRead,
    createdAt
  });

  return { insertedMessageId };
};

module.exports = createMessages;
