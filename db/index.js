const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
