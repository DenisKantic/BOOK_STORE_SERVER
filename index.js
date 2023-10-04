import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const PORT = 3000;

const app = express();


app.use('/', (req,res)=>{
    res.status(234).send("test")
})


app.listen(PORT, ()=>{
    console.log("app is listening on port", PORT);
})
