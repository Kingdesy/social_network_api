const selectComments = require("./queries/selectComments");

const fetchComments = async ({ postId }) => {
  const comments = await selectComments({ postId });

  return { comments };
};

module.exports = fetchComments;
