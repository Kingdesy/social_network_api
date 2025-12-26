const handleAPIError = require("~root/utils/handleAPIError");
const modifyPosts = require("~root/actions/posts/modifyPosts");
const newPutPostsSchema = require("./schema/newPutPostsSchema");

const putPosts = async (req, res) => {
  const { postId } = req.params;

  const { userId, content, imageUrl, visibility, createdAt } = req.body;

  try {
    await newPutPostsSchema.validate(
      { postId, userId, content, imageUrl, visibility, createdAt },
      { abortEarly: false }
    );

    await modifyPosts({
      postId,
      userId,
      content,
      imageUrl,
      visibility,
      createdAt
    });

    res.status(200).send({ success: true });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = putPosts;
