const yup = require("yup");
const selectUsersById = require("./queries/selectUsersById");
const selectPostsById = require("./queries/selectPostsById");

const newPutPostsSchema = yup.object().shape({
  postId: yup
    .number()
    .integer()
    .required()
    .label("postId")
    .typeError("The postId field must be a number")
    .test(
      "doesExist",
      "The postId field must be a valid postId",
      async function test(postId) {
        if (!postId) {
          return false;
        }

        const postIdCount = await selectPostsById({
          postId
        });
        if (postIdCount === 0) {
          return false;
        }
        return true;
      }
    ),

  userId: yup
    .number()
    .integer()
    .nullable()
    .label("userId")
    .typeError("The userId field must be a number")
    .test(
      "doesExist",
      "The userId field must be a valid userId",
      async function test(userId) {
        if (!userId) {
          return true;
        }

        const userIdCount = await selectUsersById({
          userId
        });
        if (userIdCount === 0) {
          return false;
        }
        return true;
      }
    ),

  content: yup
    .string()
    .label("content")
    .typeError("The content field must be a string"),

  imageUrl: yup
    .string()
    .max(255)
    .nullable()
    .label("imageUrl")
    .typeError("The imageUrl field must be a string"),

  visibility: yup
    .string()
    .oneOf(
      ["public", "friends", "private"],
      "The visibility field must be one of: 'public','friends','private'"
    )
    .nullable()
    .label("visibility")
    .typeError(
      "The visibility field must be one of: 'public','friends','private'"
    ),

  createdAt: yup
    .date()
    .nullable()
    .label("createdAt")
    .typeError("The createdAt field must be a date")
});

module.exports = newPutPostsSchema;
