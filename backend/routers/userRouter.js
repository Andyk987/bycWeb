import express from 'express';
import passport from 'passport';
import {
    postLogin,
    postJoin,
    postLogout,
    googleLogin,
    googleLogout,
    facebookLogin} from '../controllers/userController';
import { onlyPublic, onlyPrivate } from '../middlewares';
import cors from 'cors';

const userRouter = express.Router();

userRouter.post("/join", onlyPublic, postJoin);

userRouter.post("/login", onlyPublic, postLogin);
userRouter.post("/logout", onlyPrivate, postLogout);

userRouter.post("/login/google", googleLogin);

userRouter.post("/login/facebook", facebookLogin);

export default userRouter;