const yup = require("yup");
const selectFriendshipsById = require("./queries/selectFriendshipsById");

const newDeleteFriendshipsSchema = yup.object().shape({
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
    )
});

module.exports = newDeleteFriendshipsSchema;
