const handleAPIError = require("~root/utils/handleAPIError");
const fetchMessages = require("~root/actions/messages/fetchMessages");
const newGetMessagesSchema = require("./schema/newGetMessagesSchema");

const getMessages = async (req, res) => {
  const { senderId, receiverId } = req.params;

  const { messages } = await fetchMessages({
    senderId: senderId ? parseInt(senderId, 10) : undefined,
    receiverId: receiverId ? parseInt(receiverId, 10) : undefined
  });
  try {
    await newGetMessagesSchema.validateAsync({ senderId, receiverId });
    res.status(200).send({ messages });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getMessages;
