const authRoutes = require("./authRoutes");
const printfulRoutes = require('./printfulRoutes');
const path = require('path');

// HTML routes




// If no valid routes are hit, send the React app
router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = (app) => {
	const apiRoutes = require("express").Router();

	apiRoutes.use('/printful', printfulRoutes);
	
	app.use('/auth', authRoutes);
	app.use('/api', apiRoutes)
};
