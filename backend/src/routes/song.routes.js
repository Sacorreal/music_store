import { Router } from "express";
import { createSong, deleteSong, getSong, getSongs, updateSong } from "../controllers/songs.controller.js";
import { createSongValidator } from "../middleware/validationData.js";
import { verifyToken } from "../utils/token.js";


export const songRoutes = Router()

songRoutes
    .get("/", getSongs)
    .get("/:id", getSong)
    .post("/", createSongValidator, verifyToken, createSong)
    .patch("/:id", updateSong)
    .delete("/:id", deleteSong) 
    
