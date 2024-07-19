const sequelize = require('../config/connection');
const { User, Blog } = require('../models');
const { DataTypes } = require('sequelize');


const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      date_created: DataTypes.NOW,
    });
  }

  process.exit(0);
};

seedDatabase();
