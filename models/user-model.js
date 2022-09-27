const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'secret';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  profilePicture: { type: String },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  return next();
});

UserSchema.methods.comparePassword = function (plaintext) {
  return bcrypt.compareSync(plaintext, this.password);
};

UserSchema.methods.createJWT = function () {
  return jsonwebtoken.sign(
    {
      _id: this._id.toString(),
      email: this.email,
      username: this.username,
      password: this.password,
    },
    jwtSecret,
  );
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
