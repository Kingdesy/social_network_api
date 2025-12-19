const selectUserTypes = require("./queries/selectUserTypes");

const fetchUserTypes = async ({ userTypeId, userType }) => {
  const userTypes = await selectUserTypes({ userTypeId, userType });

  return { userTypes };
};

module.exports = fetchUserTypes;
