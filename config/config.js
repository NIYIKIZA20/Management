const dotenv = require('dotenv');

dotenv.config();

module.exports= {
 
  "dialect": process.env.DB_DIALECT,
  "storage": process.env.DB_STORAGE
} 


