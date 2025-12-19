const yup = require("yup");
const selectUserTypesById = require("./queries/selectUserTypesById");

const newGetUserTypesSchema = yup.object().shape({
  userTypeId: yup
    .number()
    .integer()
    .required()
    .label("userTypeId")
    .typeError("The userTypeId field must be a number")
    .test(
      "doesExist",
      "The userTypeId field must be a valid userTypeId",
      async function test(userTypeId) {
        if (!userTypeId) {
          return false;
        }

        const userTypeIdCount = await selectUserTypesById({
          userTypeId
        });
        if (userTypeIdCount === 0) {
          return false;
        }
        return true;
      }
    )
});

module.exports = newGetUserTypesSchema;
