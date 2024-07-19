const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(process.env.DB_URI);


module.exports = sequelize;
