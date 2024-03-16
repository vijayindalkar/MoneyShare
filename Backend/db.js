const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Vijay:mmYVHo2KsiR2HsYN@cluster0.btjkz2i.mongodb.net/moneyShare"
);

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength:3,
    maxLength:30
  },
  password: {
    type: String,
    required: true,
    minLength:6
  },
  firstName: {
    type: String,
    required: true,
    maxLength:30,
    trim:true
  },
  LastName: {
    type: String,
    required: true, 
    maxLength:30,
    trim:true
  }
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
  Admin,
};
