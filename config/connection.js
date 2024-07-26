const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.EXTERNALURL);


module.exports = sequelize;
