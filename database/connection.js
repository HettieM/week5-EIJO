const pg = require('pg')
const dotenv = require('dotenv')

dotenv.config();

const url = process.env.DATABASE_URL

if (!url) {
  console.error()
}

const db = new pg.Pool({
  connectionString: url
});


module.exports = db
