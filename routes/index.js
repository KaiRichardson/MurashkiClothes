const authRoutes = require('./authRoutes');
const printfulRoutes = require('./printfulRoutes');
const htmlRoutes = require('./htmlRoutes');
const productRoutes = require('./productRoutes');

module.exports = (app) => {
  const apiRoutes = require('express').Router();

  apiRoutes.use('/printful', printfulRoutes);
  apiRoutes.use('/products', productRoutes);

  app.use('/auth', authRoutes);
  app.use('/api', apiRoutes);
  app.use('/', htmlRoutes);
};
