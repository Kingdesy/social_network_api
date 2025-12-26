const handleAPIError = require("~root/utils/handleAPIError");
const createMessages = require("~root/actions/messages/createMessages");
const newPostMessagesSchema = require("./schema/newPostMessagesSchema");

const postMessages = async (req, res) => {
  const { senderId, receiverId, messageText, isRead, createdAt } = req.body;

  try {
    await newPostMessagesSchema.validate(
      { senderId, receiverId, messageText, isRead, createdAt },
      { abortEarly: false }
    );

    const { insertedMessageId } = await createMessages({
      senderId,
      receiverId,
      messageText,
      isRead,
      createdAt
    });

    res.status(201).send({ insertedMessageId });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postMessages;
