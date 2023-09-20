import mongoose from 'mongoose'; 

const composerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},    
    password: {type: String, required: true},
    create_at: { type: Date, default: Date.now }
}) 

export const Composer = mongoose.model(
    "Composer",
    composerSchema
)