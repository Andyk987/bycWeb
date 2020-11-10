import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    googleId: Number,
    facebookId: Number,
    isLogin: Boolean,
    isGoogleLogin: Boolean,
    isFacebookLogin: Boolean,
}, { collection: "User" }) ;

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
const model = mongoose.model("User", UserSchema);

export default model;