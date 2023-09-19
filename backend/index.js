import express from "express"; 
import cors from "cors"; 
import "dotenv/config";
import {songRouter } from "./src/routes/song.routes.js"; 
import {unknownEndpoint } from "./src/middleware/unknownEndpoint.js"
import { errorHandler } from "./src/middleware/errorHandler.js";

const app = express(); 
const PORT = process.env.PORT

app.use(express.json());
app.use(cors());

//routes main 
app.use("/api/v1/songs", songRouter)

//endpoints unknown
app.use(unknownEndpoint)

//errors 
app.use(errorHandler)


//run server
async function main(){
    app.listen(PORT, ()=>{
        console.log(`🚀 Server listen in http://localhost:${PORT}`)
    })
}

main()


