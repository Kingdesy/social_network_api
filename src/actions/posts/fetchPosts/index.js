const selectPosts = require("./queries/selectPosts");

const fetchPosts = async () => {
  const posts = await selectPosts();

  return { posts };
};

module.exports = fetchPosts;
