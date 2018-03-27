const pgp = require("pg-promise")({ promiseLib: Promise });
const { database } = require("./psql.js");
module.exports = pgp(database);