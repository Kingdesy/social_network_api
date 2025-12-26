const insertPosts = require("./queries/insertPosts");

const createPosts = async ({
  userId,
  content,
  imageUrl,
  visibility,
  createdAt
}) => {
  const insertedPostId = await insertPosts({
    userId,
    content,
    imageUrl,
    visibility,
    createdAt
  });

  return { insertedPostId };
};

module.exports = createPosts;
