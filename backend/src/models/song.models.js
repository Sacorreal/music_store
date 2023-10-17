import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    name: String, 
    genre: String, 
    duration: String, 
    url: {type: String, default: "url_song"},
    price: {type: Number, required: true}, 
    cover: {type: String, default: "url_cover"},
    visible: { type: Boolean, default: true }
},     
    { timestamps: true }

) 

export const Song = mongoose.model(
    "Song",
    songSchema
)
