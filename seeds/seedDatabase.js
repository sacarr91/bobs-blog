const sequelize = require('../config/connection');
const { Author, Blog } = require('../models');
const { UUIDV4 } = require('sequelize');

const authorData = require('./authorData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync();

  for (const author of authorData) {
    await Author.create({
      ...author,
      email: `${UUIDV4()}@aol.com`
    })
  };

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      author_id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoincrement: true
      },
      date_created: `2001-12-23 14:39:53.662522-05`
    })
  };

  process.exit(0);
};

module.exports = seedDatabase;
