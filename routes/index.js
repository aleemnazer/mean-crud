var express = require('express');
var router = express.Router();
const passport = require('../passport');
var Post = require('../models/post.model');
var User = require('../models/user.model');
/* GET home page. */
router.route('/')
  .get(function(req, res, next){
    Post.first().then(message => res.send(message))
    .catch(err => res.send(err));
});

router.get('/error', function(req, res, next){
  res.send("Some error encontered");
});

router.post('/signup',
  function(req, res, next) {
    User.create(req.body).then(function(user){
      res.send(user);
    }).catch(err => res.send(err));
});

router.post('/login',
  function(req, res, next) {
    User.findOne({ username: req.body.username }, function (err, user) {
      verified = user.verifyPassword(req.body.password);
      if (err || !verified) { return next(err); }
      user.setToken();
      res.send(user.getToken());
    });
});

module.exports = router;
