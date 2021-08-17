const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const searchRoutes = require('./search-routes');

router.use('/dashboard', dashboardRoutes);
router.use('/search', searchRoutes)
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;