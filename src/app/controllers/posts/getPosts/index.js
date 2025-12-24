const handleAPIError = require("~root/utils/handleAPIError");
const fetchPosts = require("~root/actions/posts/fetchPosts");

const getPosts = async (req, res) => {
  try {
    const { posts } = await fetchPosts();

    res.status(200).send({ posts });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getPosts;
