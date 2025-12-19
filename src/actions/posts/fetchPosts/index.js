const selectPosts = require("./queries/selectPosts");

const fetchPosts = async ({ postId }) => {
  const posts = await selectPosts({ postId });

  return { posts };
};

module.exports = fetchPosts;
