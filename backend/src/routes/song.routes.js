import {Router} from "express"; 
import { getSongs} from "../controllers/songs.controller.js"; 

export const songRouter = Router()

songRouter.get("/", getSongs)

