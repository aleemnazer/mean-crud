var Post = require('../models/post.model');

exports.index = function(req, res, next){
    Post.find({}, function(err, posts){
        if(err) return next(err);
        res.send(posts);
    });
};

exports.show = function(req, res, next){
    Post.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.send(post);
    });
};

exports.create  = function (req, res, next) {
    let post = Post({
        title: req.body.title,
        body: req.body.body
    });

    post.save(function(err){
        if(err) return next(err);
        res.send('post saved successfully');
    });
};

exports.update = function(req, res, next){
    Post.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, post){
        if(err) return next(err);
        res.send('post updated successfully');
    });
};

exports.delete = function(req, res, next){
    Post.findByIdAndDelete(req.params.id, function(err, post){
        if(err) return next(err);
        res.send('Post deleted successfully');
    });
};