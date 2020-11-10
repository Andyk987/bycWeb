import passport from 'passport';
import User from '../models/User';
import axios from 'axios';

export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, passwordCheck }
    } = req;
    if(password !== passwordCheck) {
        res.status(400);
    } else{
        try {
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
            res.send("JoinSuccess");
            next();
        } catch(error) {
            console.log(error);
        }
    }
};

export const postLogin = async (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if(!user) res.send("User Not Exists");
        else {
          req.logIn(user, async (err) => {
            if (err) throw err;
              res.send("Login Success");
              console.log("Login Success");
              await User.findByIdAndUpdate(user._id, { isLogin: true });
          });
        }
    })(req, res, next);
};

export const postLogout = async (req, res, next) => {
    await User.findByIdAndUpdate(req.user._id, { isLogin: false });
    req.logout();
    req.session.destroy();
    res.send("Logout success");
    next();
};

export const googleLogin = async (req, res) => {
    const {
        body: { id, name, email, avatarUrl }
    } = req;
    try {
        const user = await User.findOne({email});
        if(user) {
            user.googleId = id;
            user.avatarUrl = avatarUrl;
            user.isGoogleLogin = true;
            user.save();
        }
        if(!user) {
             const newUser = await User.create({
                name,
                email,
                googleId: id,
                avatarUrl,
                isGoogleLogin: true
            });
        }
        res.send("Saved Google Data");
    } catch(error) {
        console.log(error);
    }
};

export const facebookLogin = async (req, res) => {
    const {
        body: { id, name, email, avatarUrl }
    } = req;
    try {
        const user = await User.findOne({email});
        if(user) {
            user.facebookId = id;
            user.avatarUrl = avatarUrl;
            user.isFacebookLogin = true;
            user.save();
        }
        if(!user) {
            const newUser = await User.create({
                name,
                email,
                facebookId: id,
                avatarUrl,
                isFacebookLogin: true
            });
        }
        res.send("Saved Facebook Data");
    } catch(error) {
        console.log(error);
    }
};