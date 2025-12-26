const handleAPIError = require("~root/utils/handleAPIError");
const removePosts = require("~root/actions/posts/removePosts");
const newDeletePostsSchema = require("./schema/newDeletePostsSchema");

const deletePosts = async (req, res) => {
  const { postId } = req.params;

  try {
    await newDeletePostsSchema.validate({ postId }, { abortEarly: false });

    await removePosts({ postId });

    res.status(204).send({ success: true });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deletePosts;
