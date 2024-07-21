const router = require('express').Router();
const authorRoutes = require('./authorRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/authors', authorRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
