var express = require('express');
var router = express.Router();
var Post = require('../models/post.model');

router.route('/')
  .get(function(req, res, next){
      res.send(Post.getAll());
    }
  )
  .post(function(req, res, next){
    res.send(Post.create(req.body)); // calling class method here.
  });
router.route('/:id')
  .get(function(req, res, next){
    post = Post.showDetails(req.params.id);
    res.send(post);
    // Post.findById(req.params.id, function(err, post){
    //   if (err) return next(err);
    //   res.send(post);
    // });
  })
  .put(function(req, res, next){
    Post.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, post){
        if(err) return next(err);
        res.send('post updated successfully');
    });
  })
  .delete(function(req, res, next){
    Post.findByIdAndDelete(req.params.id, function(err, post){
        if(err) return next(err);
        res.send('Post deleted successfully');
    });
  });

module.exports = router;
