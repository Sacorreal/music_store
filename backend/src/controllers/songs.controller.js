import { Song } from "../models/song.models.js";
import { User } from "../models/user.models.js";

const getSongs = async (req, res, next) => {
    try {
        const songs = await Song.find(); 
        res.status(200).json(songs)
        
    } catch (error) {
        next(error);
    }
};

const getFavoriteSongs = async (req, res, next) =>{
    try {
        const idUser = req.userId;    
        //todo: omitir campos en la respuesta    
        const userFound = await User.findById(idUser, {password: 0}).populate('favoriteSongs').exec();
        res.status(200).json({favoriteSongs: userFound.favoriteSongs})
    } catch (error) {
        console.log(error)
        next(error)
        
    }
}

const saveFavoriteSong = async (req, res, next) =>{
    try {
        const idUser = req.userId;
        const songFav = req.params.id
        const userFound = await User.findById(idUser)
        userFound.favoriteSongs = [...userFound.favoriteSongs, songFav];
        userFound.save() 
        res.status(201).end(); 

        
    } catch (error) {
        console.log(error)
        next(error)
        
    }
}

const getSong = async (request, response, next) => {
    try {
        const id = req.params.id; 
        const songFound = await Song.findById(id); 

        if (!songFound){
            return res.status(404).end()
        }
        res.status(200).json(songFound)

    } catch (error) {
        next(error)
        
    }

 };


const createSong = async (request, response, next) => {
    try {
      const idUser = request.userId;
      const dataSong =  request.body;            
      const songCreate = await Song.create(dataSong)      
      const userFound = await User.findById(idUser)
      //todo: agregar más de una cancion cuando se pasa por body. 
      userFound.tracks = [...userFound.tracks,songCreate._id];
      userFound.save() 
      response.status(201).json({
        message: "song created",
        songId: songCreate._id,       
        
    }); 
    
    } catch (error) {
        console.log(error)
        next(error)
    }
};

const updateSong = async (request, response, next) => {
    try {
    const id = request.params.id
    const songNewProps = request.body; 
    await Song.findOneAndUpdate(id, songNewProps, {new: true,
    }).exec();
    } catch (error) {
        next(error)
    } 
}

const deleteSong = async (request, response, next) => {
   try {
    const id = request.params.id; 
    const deletedSong = await Song.findByIdAndRemove(id).exec();
    if(!deleteSong){
        response.status(404).end(); 
    }
    response.status(200).send("Song successfully deleted")
   } catch (error) {
    next(error)
   }
}

export { createSong, deleteSong, getFavoriteSongs, getSong, getSongs, saveFavoriteSong, updateSong };

