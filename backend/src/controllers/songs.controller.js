import {Song} from "../models/song.models.js";

const getSongs = async (req, res, next) => {
    try {
        const songs = await Song.find().populate('auth'); 
        res.status(200).json(songs)
        
    } catch (error) {
        next(error);
    }
};

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
      const dataSong =  request.body;
      const songCreate = await Song.create(dataSong)
      response.status(201).json({
        message: "song created",
        songId: songCreate._id}); 
    
    } catch (error) {
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

export { getSongs, getSong, createSong, updateSong, deleteSong };
