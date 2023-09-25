const express = require('express')
const router = express.Router()
const Book = require('../models/books')

//gets all posts

router.get('/', async (req, res) => { 
    try{
        const returnBook = await Book.find()
        res.json(returnBook)
    }
    catch{ 
        (e) => {
            res.json({message: "cannot return book"})
        }
    }
})

//submits a post

router.post('/', async (req, res) => {
    const book = new Book ({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        votes: req.body.votes,
        favourites: req.body.favourites
    
    });

    try{
        const savedBook = await book.save()
        res.json(savedBook);
    }catch (err) {
        res.json({message: "why is it not working"})
    }
        
})

// get the Id of the book and set whatever is being updated

router.patch('/:BookId', async (req, res) =>{

    try{
        const updatedBook = await Book.updateOne({_id: req.params.BookId}, 
            {$set: {
                title: req.body.title,
                description: req.body.description
                   }
            })
        res.json(updatedBook)
    } 
    catch{(e) =>{
        res.json({message: "cannot update book"})
    }}
})

router.delete('/:BookId', async (req, res) => {
    const deletedBook = await Book.deleteMany({_id: req.params.BookId})
    res.json(deletedBook)
})

module.exports = router;