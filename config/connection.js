const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.INTERNALURL);


module.exports = sequelize;
