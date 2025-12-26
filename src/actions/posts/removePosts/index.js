const deletePosts = require("./queries/deletePosts");

const removePosts = async ({ postId }) => {
  await deletePosts({ postId });
};

module.exports = removePosts;
