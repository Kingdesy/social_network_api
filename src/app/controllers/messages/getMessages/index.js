const handleAPIError = require("~root/utils/handleAPIError");
const fetchMessages = require("~root/actions/messages/fetchMessages");
const newGetMessagesSchema = require("./schema/newGetMessagesSchema");

const getMessages = async (req, res) => {
  const { messageId } = req.params;

  try {
    await newGetMessagesSchema.validate({ messageId }, { abortEarly: false });

    const { messages } = await fetchMessages({ messageId });

    res.status(200).send({ messages });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getMessages;
