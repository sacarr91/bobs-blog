const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(process.env.INTERNAL_DB_URL,
  {
    ssl: {
      rejectUnauthorized: false,
    },
  });


module.exports = sequelize;
