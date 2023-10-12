import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    name: String, 
    gender: String, 
    duration: String, 
    url: String,
    avatar: String,
    price: {type: Number, required: true}, 
    visible: { type: Boolean, default: true },
    auth: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},     
    { timestamps: true }

) 

export const Song = mongoose.model(
    "Song",
    songSchema
)
