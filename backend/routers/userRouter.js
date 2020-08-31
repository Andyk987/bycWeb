import express from 'express';
import { postLogin, postJoin, postLogout } from '../controllers/userController';
import { onlyPublic, onlyPrivate } from '../middlewares';
import cors from 'cors';

const userRouter = express.Router();

userRouter.post("/join", onlyPublic, postJoin, postLogin);

userRouter.post("/login", onlyPublic, postLogin)
userRouter.post("/logout", onlyPrivate, postLogout)

export default userRouter;