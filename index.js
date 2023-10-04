import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const app = express();
app.use(cors())
app.use(express.json())
const PORT = 3000;


app.use('/', (req,res)=>{
    res.status(234).send("test")
})


dotenv.config()
const mongoUrl = `mongodb+srv://root:${process.env.DB_PASS}@book-store-app.0nkisd2.mongodb.net/?retryWrites=true&w=majority`;


mongoose
.connect(mongoUrl)
.then(()=>{
    console.log("app is connected to database")
    app.listen(PORT, ()=>{
        console.log("app is listening on port", PORT)
    })
})
.catch((error)=>{
    console.log("connection error")
    console.log(error)
})
