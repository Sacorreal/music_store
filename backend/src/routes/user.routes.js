import { Router } from "express";
import { deleteUser, getComposer, updateUser } from "../controllers/user.controller.js";
import { updateUserValidator } from "../middleware/validationData.js";


export const userRoutes = Router()

userRoutes
    .get("/composer",getComposer)
    .put("/:id",updateUserValidator, updateUser )
    .delete("/:id", deleteUser ) 