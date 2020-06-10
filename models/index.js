const { query } = require("../db/index");

async function fetchBootcampers() {
  const data = await query(
    `
        SELECT * FROM bootcampers
    `
  );
  return data.rows;
}

async function addBootcamper({ name, age, favourite }) {
  const data = await query(
    ` INSERT INTO bootcampers
   ( NAME,
    AGE,
    FAVOURITE ) VALUES ($1, $2, $3)`,
    [name, age, favourite]
  );
  return data.rows[0];
}

module.exports = {
  addBootcamper,
  fetchBootcampers
};
