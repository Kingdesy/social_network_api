const deleteMessages = require("./queries/deleteMessages");

const removeMessages = async ({ messageId }) => {
  await deleteMessages({ messageId });
};

module.exports = removeMessages;
