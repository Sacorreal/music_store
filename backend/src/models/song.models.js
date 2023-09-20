import mongoose from 'mongoose'; 

const songSchema = new mongoose.Schema({
    name: String, 
    gender: String, 
    duration: String, 
    url: String,
    price: {type: Number, required: true}, 
    visible: { type: Boolean, default: true },
    create_at: { type: Date, default: Date.now },
    auth: [{type: mongoose.Schema.Types.ObjectId, ref: 'Composer'}, {strict: true}] // como se especifica en la relacion? 
}) 

export const Song = mongoose.model(
    "Song",
    songSchema
)
