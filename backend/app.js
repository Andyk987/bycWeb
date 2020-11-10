import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routers/userRouter';
import passport from 'passport';
import mongoose from "mongoose";
import session from 'express-session';
import MongoStore from "connect-mongo";
import { onlyPublic } from "./middlewares";
import { ApolloServer } from 'apollo-server-express';
import resolvers from './graphql/resolvers';
import fs from 'fs';
import path from 'path';
import { localMiddleware } from './middlewares';

import "./passport";

const app = express();

const CokieStore = MongoStore(session);



app.use(
    cors({
        origin: ["https://webproject-gxrpg.run.goorm.io", "http://webproject-gxrpg.run.goorm.io"],
        credentials: true
    })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new CokieStore({ mongooseConnection: mongoose.connection })
    })
);
app.use(passport.initialize());
app.use(passport.session());


app.use("/", userRouter);


const typeDefs = fs.readFileSync(path.join(__dirname, './schema.graphql'), 'utf8');

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });


export default app;