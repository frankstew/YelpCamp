var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose); // needed for mongoose stuff
module.exports = mongoose.model("User", UserSchema);