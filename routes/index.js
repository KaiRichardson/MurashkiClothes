const router = require("express").Router();
const authRoutes = require("./authRoutes");
const apiRoutes = require('./apiRoutes');
const path = require('path');

// HTML routes
router.use('/api', apiRoutes);
router.use('/auth', authRoutes);

// Auth routes



// If no Auth routes are hit, send the React app
router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
