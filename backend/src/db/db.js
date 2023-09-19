import mongoose from "mongoose"; 

const URL = process.env.URLDB

export const dbConnection = async () => {
    await mongoose.connect(URL)
}

