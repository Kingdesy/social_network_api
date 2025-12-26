const handleAPIError = require("~root/utils/handleAPIError");
const modifyMessages = require("~root/actions/messages/modifyMessages");
const newPutMessagesSchema = require("./schema/newPutMessagesSchema");

const putMessages = async (req, res) => {
  const { messageId } = req.params;

  const { senderId, receiverId, messageText, isRead, createdAt } = req.body;

  try {
    await newPutMessagesSchema.validate(
      { messageId, senderId, receiverId, messageText, isRead, createdAt },
      { abortEarly: false }
    );

    await modifyMessages({
      messageId,
      senderId,
      receiverId,
      messageText,
      isRead,
      createdAt
    });

    res.status(200).send({ success: true });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = putMessages;
