import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {PORT, mongoDBURL} from './config.js'

const app = express();


app.use('/', (req,res)=>{
    res.status(234).send("test")
})


mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("app is connected to database")
    app.listen(PORT, ()=>{
        console.log("app is listening on port", PORT)
    })
})
.catch((error)=>{
    console.log(error)
})
