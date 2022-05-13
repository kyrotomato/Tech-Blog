const router = require('express').Router();

//req home routes
const homeRoutes = require('./home-routes.js');
router.use('/', homeRoutes);

module.exports = router;