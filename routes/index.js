const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes");
const authRoutes = require("./authRoutes");
const apiRoutes = require('./apiRoutes');

// HTML routes
router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/', htmlRoutes);

// Auth routes



module.exports = router;