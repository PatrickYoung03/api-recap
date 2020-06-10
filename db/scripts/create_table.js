const { query } = require("../index");

async function createTable() {
  const res = await query(`CREATE TABLE IF NOT EXISTS bootcampers
  (  
  ID SERIAL PRIMARY KEY,
    NAME TEXT,
    AGE INT,
    FAVOURITE TEXT
    )
    `);
  console.log(res);
}

createTable();
