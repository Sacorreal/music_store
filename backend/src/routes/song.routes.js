import {Router} from "express"; 
import { createSongValidator} from  "../middleware/validationData.js"
import { getSongs, getSong, createSong, updateSong, deleteSong} from "../controllers/songs.controller.js"; 


export const songRoutes = Router()

songRoutes
    .get("/", getSongs)
    .get("/:id", getSong)
    .post("/", createSongValidator, createSong)
    .patch("/:id", updateSong)
    .delete("/:id", deleteSong) 
    
