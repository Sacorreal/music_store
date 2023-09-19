import multer from "multer"; 

const getSongs = async (req, res, next) => {
    try {
        res.status(200).json({
            "canciones": "listado de canciones"
        })
    } catch (error) {
        next(error)
    }
}

const getSong = async (req, res, next) =>{

}

const createSong = async (req, res, next) =>{
    const storage = multer.memoryStorage();
    const upload = multer({
        storage,
        limit:{
            fields: 1,
            fileSize: 9000000,
            files: 1,
            parts: 2
        }
    })
    upload.single('song')(req, res, (err) => {
        if (err){
            return res.status(400).json({message: err.message}); 
        }else if (!req.body.name){
            return res.status(400).json({message: "No track name in request body"})
        }
        let trackName = req.body.name; 
    })
}

export { getSongs, getSong, createSong }