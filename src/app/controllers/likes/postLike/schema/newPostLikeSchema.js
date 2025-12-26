const yup = require("yup");

const newPostLikeSchema = yup.object().shape({
  userId: yup
    .number()
    .integer()
    .required()
    .label("userId")
    .typeError("The userId field must be a number"),
  postId: yup
    .number()
    .integer()
    .required()
    .label("postId")
    .typeError("The postId field must be a number")
});

module.exports = newPostLikeSchema;
