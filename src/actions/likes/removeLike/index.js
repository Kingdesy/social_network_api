const deleteLike = require("./queries/deleteLike");

const removeLike = async ({ userId, postId }) => {
  await deleteLike({ userId, postId });

  return { success: true };
};

module.exports = removeLike;
