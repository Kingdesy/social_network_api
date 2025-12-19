const handleAPIError = require("~root/utils/handleAPIError");
const fetchUserTypes = require("~root/actions/userTypes/fetchUserTypes");
const newGetUserTypesSchema = require("./schema/newGetUserTypesSchema");

const getUserTypes = async (req, res) => {
  const { userTypeId, userType } = req.params;

  try {
    await newGetUserTypesSchema.validate(
      { userTypeId, userType },
      { abortEarly: false }
    );

    const { userTypes } = await fetchUserTypes({ userTypeId, userType });

    res.status(200).send({ userTypes });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getUserTypes;
