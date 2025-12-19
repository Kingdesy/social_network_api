const handleAPIError = require("~root/utils/handleAPIError");
const fetchPosts = require("~root/actions/posts/fetchPosts");
const newGetPostsSchema = require("./schema/newGetPostsSchema");

const getPosts = async (req, res) => {
  const { postId } = req.params;

  try {
    await newGetPostsSchema.validate({ postId }, { abortEarly: false });

    const { posts } = await fetchPosts({ postId });

    res.status(200).send({ posts });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPosts;
