const yup = require("yup");
const selectFriendshipsById = require("./queries/selectFriendshipsById");

const newPutFriendshipsSchema = yup.object().shape({
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

  status: yup
    .string()
    .oneOf(
      ["pending", "accepted", "blocked"],
      "The status field must be one of: 'pending','accepted','blocked'"
    )
    .nullable()
    .label("status")
    .typeError(
      "The status field must be one of: 'pending','accepted','blocked'"
    ),

  updatedAt: yup
    .date()
    .nullable()
    .label("updatedAt")
    .typeError("The updatedAt field must be a date")
});

module.exports = newPutFriendshipsSchema;
