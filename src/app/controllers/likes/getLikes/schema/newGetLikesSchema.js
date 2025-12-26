const yup = require("yup");

const newGetLikesSchema = yup.object().shape({
  postId: yup
    .number()
    .integer()
    .required()
    .label("postId")
    .typeError("The postId field must be a number")
});

module.exports = newGetLikesSchema;
