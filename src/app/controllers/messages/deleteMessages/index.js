const handleAPIError = require("~root/utils/handleAPIError");
const removeMessages = require("~root/actions/messages/removeMessages");
const newDeleteMessagesSchema = require("./schema/newDeleteMessagesSchema");

const deleteMessages = async (req, res) => {
  const { messageId } = req.params;

  try {
    await newDeleteMessagesSchema.validate(
      { messageId },
      { abortEarly: false }
    );

    await removeMessages({ messageId });

    res.status(204).send({ success: true });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteMessages;
