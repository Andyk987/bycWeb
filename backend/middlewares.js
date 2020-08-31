export const onlyPublic = (req, res, next) => {
    if(req.user) {
        res.status(404).send("already Login");
        console.log("already Login");
        console.log(req.user);
        console.log(req.session);
    } else {
        next();
    }
};

export const onlyPrivate = (req, res, next) => {
    if(!req.user) {
        res.status(404).send("already Logout");
        console.log("already Logout");
    } else {
        next();
    }
}