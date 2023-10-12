import { Router } from "express";
import { deleteUser, getComposer, getComposers, updateUser } from "../controllers/user.controller.js";
import { updateUserValidator } from "../middleware/validationData.js";
//import { verifyToken } from "../utils/token.js";


export const userRoutes = Router()

userRoutes
    .get("/composers",getComposers)
    .get("/composer/:id",getComposer)
    .put("/:id",updateUserValidator, updateUser )
    .delete("/:id", deleteUser ) 