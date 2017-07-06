const mongoose = require('../libs/mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
});

exports.User = mongoose.model('User', UserSchema);
