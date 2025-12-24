const yup = require("yup");
const selectById = require("./queries/selectById");

const newGetMessagesSchema = yup.object().shape({
  messageId: yup
    .number()
    .integer()
    .required()
    .label("messageId")
    .typeError("The messageId field must be a number")
    .test(
      "doesExist",
      "The messageId field must be a valid messageId",
      async function test(messageId) {
        if (!messageId) {
          return false;
        }

        const messageIdCount = await selectById({
          messageId
        });
        if (messageIdCount === 0) {
          return false;
        }
        return true;
      }
    )
});

module.exports = newGetMessagesSchema;
