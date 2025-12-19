const selectMessages = require("./queries/selectMessages");

const fetchMessages = async ({ senderId, receiverId } = {}) => {
  const messages = await selectMessages({ senderId, receiverId });

  return { messages };
};

module.exports = fetchMessages;
