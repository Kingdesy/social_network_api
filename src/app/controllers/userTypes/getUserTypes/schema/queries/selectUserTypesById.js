const { submitQuery, getFirst } = require("~root/lib/database");

const selectUserTypesById = ({ userTypeId }) => submitQuery`
  SELECT
    COUNT(*) AS count
  FROM
    user_types
  WHERE
    user_type_id = ${userTypeId}
`;

module.exports = getFirst(selectUserTypesById, "count");
