import {Router} from "express"; 
import { getSongs, getSong, createSong, updateSong, deleteSong} from "../controllers/songs.controller.js"; 


export const songRoutes = Router()

songRoutes
    .get("/", getSongs)
    .get("/:id", getSong)
    .post("/", createSong)
    .patch("/:id", updateSong)
    .delete("/:id", deleteSong) 
    
