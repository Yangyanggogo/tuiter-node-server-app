import express from 'express';
import session from "express-session";
import cors from 'cors';
import mongoose from "mongoose";

import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users-controller.js';
import tuitsController from './controllers/tuits/tuits-controller.js';
import AuthController from "./users/auth-controller.js";

mongoose.connect("mongodb://127.0.0.1:27017/Tuiter");
const app = express()
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
   );
   
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
      })     
)
app.use(express.json());
tuitsController(app)
HelloController(app)
UserController(app)
AuthController(app);

const port = process.env.PORT || 4000;
app.listen(process.env.PORT || 4000);
