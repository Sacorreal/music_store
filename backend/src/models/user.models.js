import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},     
    password: {type: String, required: true},
    avatar: String,
    role: {type: String, enum: ["composer", "singer", "admin", "user"], default: "user"}    
}, { timestamps: true }) 

userSchema.methods.encryptPassword = async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
  
    return hash;
  }

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password)
  }

export const User = mongoose.model(
    "User",
    userSchema
)