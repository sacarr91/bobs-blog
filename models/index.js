const Author = require('./Author');
const Blog = require('./Blog');

Author.hasMany(Blog, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(Author, {
  foreignKey: 'author_id'
});

module.exports = { Author, Blog };
