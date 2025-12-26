const yup = require("yup");
const selectUsersById = require("./queries/selectUsersById");

const newPostMessagesSchema = yup.object().shape({
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

module.exports = newPostMessagesSchema;
