var mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

var UserSchema = new mongoose.Schema({
  displayName: String,
  name: String,
  gender: String,
  userid: String,
  facebookId: String,
  isJordon: {type: Boolean, default: false },
  updated_at: { type: Date, default: Date.now },
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', UserSchema);