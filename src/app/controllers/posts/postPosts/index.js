const handleAPIError = require("~root/utils/handleAPIError");
const createPosts = require("~root/actions/posts/createPosts");
const newPostPostsSchema = require("./schema/newPostPostsSchema");

const postPosts = async (req, res) => {
  const { userId, content, imageUrl, visibility, createdAt } = req.body;

  try {
    await newPostPostsSchema.validate(
      { userId, content, imageUrl, visibility, createdAt },
      { abortEarly: false }
    );

    const { insertedPostId } = await createPosts({
      userId,
      content,
      imageUrl,
      visibility,
      createdAt
    });

    res.status(201).send({ insertedPostId });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postPosts;
