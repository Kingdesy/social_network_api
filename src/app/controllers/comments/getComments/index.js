const handleAPIError = require("~root/utils/handleAPIError");
const fetchComments = require("~root/actions/comments/fetchComments");
const newGetCommentsSchema = require("./schema/newGetCommentsSchema");

const getComments = async (req, res) => {
  const { postId } = req.params;

  try {
    await newGetCommentsSchema.validate({ postId }, { abortEarly: false });

    const { comments } = await fetchComments({ postId });

    res.status(200).send({ comments });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getComments;
