const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.model');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      verified = user.verifyPassword(password)
      if (!verified) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
module.exports = passport;