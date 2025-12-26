const insertLike = require("./queries/insertLike");

const createLike = async ({ userId, postId }) => {
  await insertLike({ userId, postId });

  return { success: true };
};

module.exports = createLike;
