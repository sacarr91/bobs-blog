require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize = new Sequelize(process.env.EXTERNALURL);


module.exports = sequelize;
