import User from '../models/User';



const resolvers = {
    Query: {
        users: async () => await User.find(),
        user: async (_, { email }) => User.findOne({ email: email }),
        intro: () => {
            let Introducepage = {
                isRendering: false
            }
            return Introducepage
        }
    },
    Mutation: {
        login: async (_, { email }) => {
            async (req, res, next) => {
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
            }
        },
        logout: async (_, { email }) => {
            async (req, res, next) => {
                await User.findByIdAndUpdate(req.user._id, { isLogin: false });
                req.logout();
                req.session.destroy();
                console.log("logout");
                res.send("Logout success");
                next();
            }
        },
        checkGoogleLogout: async (_, { email }) => {
            const user = await User.findOne({ email: email });
            user.isGoogleLogin = false;
            user.save();
        },
        checkFacebookLogout: async (_, { email }) => {
            const user = await User.findOne({ email: email });
            user.isFacebookLogin = false;
            user.save();
        },
        checkIntro: (_, { state }) => {
            let Introducepage = {
                isRendering: false
            }
            Introducepage.isRendering = !state
        }
    }
};

export default resolvers; 