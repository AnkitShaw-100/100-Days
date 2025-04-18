import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"

import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    console.log(`Connecting to MongoDB at: ${process.env.MONGODB_URI}/${DB_NAME}`);
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${
            connectionInstance.connection.host
        }`);
    }
        catch(error){
            console.log("MONGODB connection error : ", error);
            process.exit(1)
        }
    }
connectDB()

.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : $ {
            process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})

// function connectDB(){

// }

// connectDB()

/*const app = express()
( async () => {
    try{
        await mongoose.connect(`{process.enev.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR : ", error)
        throw err
    }
})()*/