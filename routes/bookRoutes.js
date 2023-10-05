import express from 'express'
import { Book }  from '../model/bookModel.js'

const router = express.Router();


router.post('/', async (req,res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author || 
            !req.body.publishYear 
        ) {
            return res.status(400).send({
                message: "send all required fields: title, author and publish Year"
            })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook);
        return res.send(book);
        
    } catch(error){
        console.log(error);
        res.status(500).send({message: error.message})
    } 
}) 


router.get('/', async (req,res)=>{
    try{
        const books = await Book.find({});

        return res.status(200).json({
            data: books
        })
    }catch (error){
        console.log(error)
        res.status(500).send({message: error.message})
    }
})


export default router;

