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
              res.send("LoginSuccess");
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