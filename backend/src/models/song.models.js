import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    name: String, 
    genre: String, 
    duration: String, 
    url: String,
    avatar: String,
    price: {type: Number, required: true}, 
    visible: { type: Boolean, default: true }
},     
    { timestamps: true }

) 

export const Song = mongoose.model(
    "Song",
    songSchema
)
