const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUserTypes = ({ userTypeId, userType }) => submitQuery`
  SELECT
  FROM
    user_types
  WHERE
    user_type_id = ${userTypeId}
    AND user_type = ${userType}
`;

module.exports = camelKeys(selectUserTypes);
