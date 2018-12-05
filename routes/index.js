var express = require('express');
var router = express.Router();

var Post = require('../models/post.model');

/* GET home page. */
router.route('/')
  .get(function(req, res, next){
    Post.first().then(message => res.send(message))
    .catch(err => res.send(err));
  });

module.exports = router;
