const updateMessages = require("./queries/updateMessages");

const modifyMessages = async ({
  messageId,
  senderId,
  receiverId,
  messageText,
  isRead,
  createdAt
}) => {
  await updateMessages({
    messageId,
    senderId,
    receiverId,
    messageText,
    isRead,
    createdAt
  });
};

module.exports = modifyMessages;
