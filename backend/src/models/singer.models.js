import mongoose from 'mongoose'; 

const singerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},     
    password: {type: String, required: true},
    create_at: { type: Date, default: Date.now }
}) 

export const Singer = mongoose.model(
    "Singer",
    singerSchema
)