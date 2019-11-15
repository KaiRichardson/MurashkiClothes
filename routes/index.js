const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes");
const authRoutes = require("./authRoutes");
const apiRoutes = require('./apiRoutes');

// HTML routes
router.use("/", htmlRoutes);

// Auth routes
router.use("/auth", authRoutes);
router.use('/api', apiRoutes);

module.exports = router;