const selectLikes = require("./queries/selectLikes");

const fetchLikes = async ({ postId }) => {
  const likes = await selectLikes({ postId });

  return { likes };
};

module.exports = fetchLikes;
