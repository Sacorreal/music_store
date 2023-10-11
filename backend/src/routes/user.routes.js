import { Router } from "express";
import { deleteUser, getComposers, updateUser } from "../controllers/user.controller.js";
import { updateUserValidator } from "../middleware/validationData.js";


export const userRoutes = Router()

userRoutes
    .get("/composer",getComposers)
    .put("/:id",updateUserValidator, updateUser )
    .delete("/:id", deleteUser ) 