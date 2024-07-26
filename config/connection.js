const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(process.env.EXTERNALURL,
    {
      ssl: {
        rejectUnauthorized: false,
      },
    });


module.exports = sequelize;
