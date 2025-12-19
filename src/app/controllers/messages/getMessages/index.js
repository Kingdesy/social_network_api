const fetchMessages = require("~root/actions/messages/fetchMessages");

const getMessages = async (req, res) => {
  const { sender_id, receiver_id } = req.query;

  const { messages } = await fetchMessages({
    senderId: sender_id ? parseInt(sender_id, 10) : undefined,
    receiverId: receiver_id ? parseInt(receiver_id, 10) : undefined
  });

  return res.send({ messages });
};

module.exports = getMessages;
