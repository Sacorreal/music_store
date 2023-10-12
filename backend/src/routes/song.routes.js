import { Router } from "express";
import { createSong, deleteSong, getSong, getSongs, updateSong } from "../controllers/songs.controller.js";
import { createSongValidator } from "../middleware/validationData.js";


export const songRoutes = Router()

songRoutes
    .get("/", getSongs)
    .get("/:id", getSong)
    .post("/", createSongValidator, createSong)
    .patch("/:id", updateSong)
    .delete("/:id", deleteSong) 
    
