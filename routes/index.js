var express = require('express');
var router = express.Router();

var Post = require('../models/post.model');

/* GET home page. */
router.route('/')
  .get(function(req, res, next){
    Post.first().then(function(message1){
      Post.second().then(function(message2){
        Post.third().then(function(message3){
          res.send(message1+message2+message3);
        }).catch(err => res.send(err));
    }).catch(err => res.send(err));
  }).catch(err => res.send(err));
});

module.exports = router;
