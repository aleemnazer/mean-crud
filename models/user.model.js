var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var UsersSchema = new Schema({
    username: { type: String, required: true },
    salt: { type: String },
    hash: { type: String },
    token: { type: String }
})

UsersSchema.methods.setPassword = function(password) {
  password = new Buffer(password, 'binary');
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UsersSchema.methods.verifyPassword = function(password) {
  password  = new Buffer(password, 'binary')
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UsersSchema.methods.getToken = function() {
  return this.token;
};

UsersSchema.methods.setToken = function() {
  token = crypto.randomBytes(16).toString('hex');
  this.token = token;
  this.save();
};

UsersSchema.statics.create = function(params) {
  user = new this({ username: params.username });
  user.setPassword(params.password);
  return user.save();
};

module.exports = mongoose.model('User', UsersSchema);
