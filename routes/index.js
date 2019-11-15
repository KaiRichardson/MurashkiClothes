const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes");
const authRoutes = require("./authRoutes");

// HTML routes
router.use("/", htmlRoutes);

// Auth routes
router.use("/auth", authRoutes);

module.exports = router;