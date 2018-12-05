var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PostSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    body: { type: String, required: true },
    author_id: { type: Number },
    views_count: { type: Number}
});

PostSchema.methods.greeting = function() {
    return 'hello from instance method '+ this.title;
};

PostSchema.statics.create = function(params) {
    return new this(params).save();
}

PostSchema.statics.show = function (id){
    return this.findById(id).exec();
}

PostSchema.statics.getAll = function() {
    return this.find({}).exec();
}

PostSchema.statics.destroy = function(id) {
    return this.findOneAndDelete(id).exec();
}

PostSchema.statics.update = function(id, params) {
    return this.findByIdAndUpdate(id, { $set: params }).exec();
}

PostSchema.statics.first = function(){
    return this.second().then(function(message){
        return new Promise(function(resolve, reject){
            if(true)
                resolve("retruning from one. "+ message);
            else
                reject("rejecting from first. ");
        });
    }).catch(function(err){
        return Promise.reject(err);
    });
}

PostSchema.statics.second = function(){
    return this.third().then(function(message){
        return new Promise(function(resolve, reject){
        if(false)
                resolve("retruning from second. "+message);
        else
            reject("rejecting from second. ");
        });
    }).catch(function(err){
        return Promise.reject(err);
    });
}

PostSchema.statics.third = function(){
    return new Promise(function(resolve, reject){
        if(false)
            resolve("retruning from third. ");
        else
            reject("rejecting from third. ");
        });
}

module.exports = mongoose.model('Post', PostSchema);
