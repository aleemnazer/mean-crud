var Post = require('../models/post.model');
exports.index = function(req, res, next){
    res.send('hello from conrtoller');
}