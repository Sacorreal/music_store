import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";

export const authRouter = Router(); 

authRouter
        .post("/signup",signUp) //registrar
        .post("/signin",signIn ) //logear


