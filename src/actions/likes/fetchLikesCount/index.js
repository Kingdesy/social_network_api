const selectLikesCount = require("./queries/selectLikesCount");

const fetchLikesCount = async ({ postId }) => {
  const [result] = await selectLikesCount({ postId });

  return { likesCount: result.likesCount };
};

module.exports = fetchLikesCount;
