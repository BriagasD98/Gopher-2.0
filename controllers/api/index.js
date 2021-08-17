const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const eventRoutes = require('./event-routes');
const commentRoutes = require('./comment-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/comments', commentRoutes);
router.use('/category', categoryRoutes);

module.exports = router;