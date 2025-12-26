const yup = require("yup");

const newPostFriendshipsSchema = yup.object().shape({
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

module.exports = newPostFriendshipsSchema;
