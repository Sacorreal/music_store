import cors from "cors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { dbConnection } from "./src/db/db.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
import { unknownEndpoint } from "./src/middleware/unknownEndpoint.js";
import { authRouter } from "./src/routes/auth.routes.js";
import { songRoutes } from "./src/routes/song.routes.js";
import { userRoutes } from "./src/routes/user.routes.js";


const app = express(); 
const PORT = process.env.PORT

// middlewares
app.use(morgan('dev')); // leer las peticiones
app.use(express.json());
app.use(express.urlencoded({extended:false})); //recibir peticiones desde un form. 
app.use(cors());

//routes
app.use("/api/v1/songs", songRoutes)
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/auth", authRouter)

app.use("/api/v1/welcome", (req,res)=>res.status(200).json({message:"Welcome to my api rest"}))

//endpoints unknown
app.use(unknownEndpoint)

//errors 
app.use(errorHandler)


//run server
async function main(){

    //db connection
    await dbConnection(); 

    app.listen(PORT, ()=>{
        console.log(`🚀 Server listen in http://localhost:${PORT}`)
    })
}


main()


