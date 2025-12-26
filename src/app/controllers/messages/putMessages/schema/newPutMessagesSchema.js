const yup = require("yup");
const selectUsersById = require("./queries/selectUsersById");
const selectMessagesById = require("./queries/selectMessagesById");

const newPutMessagesSchema = yup.object().shape({
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

        const messageIdCount = await selectMessagesById({
          messageId
        });
        if (messageIdCount === 0) {
          return false;
        }
        return true;
      }
    ),

  senderId: yup
    .number()
    .integer()
    .nullable()
    .label("senderId")
    .typeError("The senderId field must be a number")
    .test(
      "doesExist",
      "The senderId field must be a valid senderId",
      async function test(senderId) {
        if (!senderId) {
          return true;
        }
        const senderIdCount = await selectUsersById({
          userId: senderId
        });
        if (senderIdCount === 0) {
          return false;
        }
        return true;
      }
    ),

  receiverId: yup
    .number()
    .integer()
    .nullable()
    .label("receiverId")
    .typeError("The receiverId field must be a number")
    .test(
      "doesExist",
      "The receiverId field must be a valid receiverId",
      async function test(receiverId) {
        if (!receiverId) {
          return true;
        }
        const receiverIdCount = await selectUsersById({
          userId: receiverId
        });
        if (receiverIdCount === 0) {
          return false;
        }
        return true;
      }
    ),

  messageText: yup
    .string()
    .nullable()
    .label("messageText")
    .typeError("The messageText field must be a string"),

  isRead: yup
    .boolean()
    .nullable()
    .label("isRead")
    .typeError("The isRead field must be a boolean"),

  createdAt: yup
    .date()
    .nullable()
    .label("createdAt")
    .typeError("The createdAt field must be a date")
});

module.exports = newPutMessagesSchema;
