var express = require('express');
var router = express.Router();
var Post = require('../models/post.model');
const passport = require('../passport');

router.get('/',
  function(req, res, next){
    Post.find().limit(20)
    .then(function(posts){
       res.send(posts)
    })
    .catch(err => res.send(err));
  }
)

router.post("/", passport.authenticate('bearer', { session: false }), function(req, res, next){
    Post.create(req.body).then(post => res.send(post))
    .catch(err => res.send(err));
  });

router.route('/:id')
  .get(function(req, res, next){
    Post.show(req.params.id).then(post => res.send(post))
    .catch(err => res.send(err));
  })
  .put(function(req, res, next){
    Post.update(req.params.id, req.body).then( post => res.send('successfully'))
    .catch( err => res.send(err));
  })
  .delete(function(req, res, next){
    Post.destroy(req.params.id).then( success => res.send('succesful'))
    .catch(err => res.send(err));
  });

module.exports = router;
