const jwt = require('jwt-simple');
const config = require('../config');
const passportService = require('./passport'); // eslint-disable-line no-unused-vars
const passport = require('passport');

module.exports = {
  tokenForUser: function(userId) {
    const timeStamp = new Date().getTime();
    return jwt.encode({ sub: userId, iat: timeStamp }, config.jwtSecret);
  },
  requireAuth: passport.authenticate('jwt', { session: false }),
  requireSignin: passport.authenticate('local', { session: false })
};
