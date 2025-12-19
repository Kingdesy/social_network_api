const { sql } = require("~root/lib/database");
const { paginate, FILTERS } = require("~root/lib/paginate");

const getMessages = async (req, res) => {
  const resultset = await paginate({
    basePath: req.path,
    baseTable: "messages",
    selectFields: ["undefined.undefined"],
    joinStatements: [],
    sortableAttributes: [],
    filterableAttributes: [],

    sortBy: req.query.sort_by,
    limit: req.query.page_size,
    page: req.query.page, // "first" | "last" | null
    direction: req.query.direction, // next | previous
    filters: req.query.filters,
    cursorValues: req.query.cursor
  });

  return res.send(resultset);
};

module.exports = getMessages;
