const fetchMessages = require("~root/actions/messages/fetchMessages");

const getMessages = async (req, res) => {
  const { senderId, receiverId } = req.params;

  const { messages } = await fetchMessages({
    senderId: senderId ? parseInt(senderId, 10) : undefined,
    receiverId: receiverId ? parseInt(receiverId, 10) : undefined
  });

  return res.send({ messages });
};

module.exports = getMessages;
