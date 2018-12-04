var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PostSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    body: { type: String, required: true },
    author_id: { type: Number },
    views_count: { type: Number}
});

PostSchema.methods.greeting = function(){
    return 'hello from instance method '+ this.title;
};

PostSchema.statics.create = function(params){
    post = new this(params);
    post.save();
    return post;
}

PostSchema.static.showDetails = function showDetails(id){
    this.findById(id, function(err, post){
        if(err) return next(err);
        return post;
    });
}

PostSchema.statics.getAll = function(){
    this.find({}, function(err, posts){
        if(err) return next(err);
        return posts;
    });
}

module.exports = mongoose.model('Post', PostSchema);