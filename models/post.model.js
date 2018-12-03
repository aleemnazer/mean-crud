var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PostSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    body: { type: String, required: true },
    author_id: { type: Number },
    views_count: { type: Number}
});

module.exports = mongoose.model('Post', PostSchema);