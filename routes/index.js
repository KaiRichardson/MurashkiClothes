const authRoutes = require('./authRoutes');
const printfulRoutes = require('./printfulRoutes');
const htmlRoutes = require('./htmlRoutes');

module.exports = (app) => {
	const apiRoutes = require("express").Router();

	apiRoutes.use('/printful', printfulRoutes);
	
	app.use('/auth', authRoutes);
	app.use('/api', apiRoutes);
	app.use('/', htmlRoutes);
};
