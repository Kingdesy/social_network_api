const yup = require("yup");
const selectFriendshipsById = require("./queries/selectFriendshipsById");

const newGetFriendshipsSchema = yup.object().shape({
  userId: yup
    .number()
    .integer()
    .required()
    .label("userId")
    .typeError("The userId field must be a number")
    .test(
      "doesExist",
      "The userId field must be a valid userId",
      async function test(userId) {
        if (!userId) {
          return false;
        }

        const userIdCount = await selectFriendshipsById({
          userId
        });
        if (userIdCount === 0) {
          return false;
        }
        return true;
      }
    ),

  friendId: yup
    .number()
    .integer()
    .required()
    .label("friendId")
    .typeError("The friendId field must be a number")
    .test(
      "doesExist",
      "The friendId field must be a valid friendId",
      async function test(friendId) {
        if (!friendId) {
          return false;
        }

        const friendIdCount = await selectFriendshipsById({
          friendId
        });
        if (friendIdCount === 0) {
          return false;
        }
        return true;
      }
    )
});

module.exports = newGetFriendshipsSchema;
