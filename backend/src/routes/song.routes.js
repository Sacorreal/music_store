import { Router } from "express";
import { createSong, deleteSong, getFavoriteSongs, getSong, getSongs, saveFavoriteSong, updateSong } from "../controllers/songs.controller.js";
import { createSongValidator } from "../middleware/validationData.js";
import { verifyToken } from "../utils/token.js";


export const songRoutes = Router()

songRoutes
    .get("/", getSongs)
    .get("/myFavoriteSongs",verifyToken, getFavoriteSongs)
    .get("/:id", getSong)    
    .post("/", createSongValidator, verifyToken, createSong)
    .post("/favoriteSong/:id",verifyToken, saveFavoriteSong)
    .patch("/:id", updateSong)
    .delete("/:id", deleteSong) 
    
