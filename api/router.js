module.exports = app => {
  app.use('/users', require('./controllers/users'));
};
