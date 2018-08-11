module.exports = function(app) {
  app.use('/users', require('./controllers/users'));
  app.use('/posts', require('./controllers/posts'));
};
