const { v4: uuidv4 } = require('uuid');
const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync();

  for (const user of userData) {
    await User.create({
      ...user,
      email: `${uuidv4()}@aol.com`
    })
  };

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: userData[Math.floor(Math.random() * userData.length)].id,
      date_created: `2001-12-23 14:39:53.662522-05`
    })
  };

  process.exit(0);
};

module.exports = seedDatabase;
