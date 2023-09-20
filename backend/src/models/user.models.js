import mongoose from 'mongoose'; 

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},     
    password: {type: String, required: true},
    profile: {type: String, enum: ["composer", "singer", "admin"]},
    create_at: { type: Date, default: Date.now }
}) 

export const User = mongoose.model(
    "User",
    userSchema
)