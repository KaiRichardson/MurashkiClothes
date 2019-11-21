const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes");
const authRoutes = require("./authRoutes");

// Auth routes
router.use("/user", authRoutes);

// If no Auth routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
