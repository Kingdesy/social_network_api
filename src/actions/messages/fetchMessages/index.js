const selectMessages = require("./queries/selectMessages");

const fetchMessages = async ({ messageId }) => {
  const messages = await selectMessages({ messageId });

  return { messages };
};

module.exports = fetchMessages;
