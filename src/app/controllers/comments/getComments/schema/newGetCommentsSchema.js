const yup = require("yup");
const selectPostsById = require("./queries/selectPostsById");

const newGetCommentsSchema = yup.object().shape({
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
    )
});

module.exports = newGetCommentsSchema;
