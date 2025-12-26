const updatePosts = require("./queries/updatePosts");

const modifyPosts = async ({
  postId,
  userId,
  content,
  imageUrl,
  visibility,
  createdAt
}) => {
  await updatePosts({
    postId,
    userId,
    content,
    imageUrl,
    visibility,
    createdAt
  });
};

module.exports = modifyPosts;
