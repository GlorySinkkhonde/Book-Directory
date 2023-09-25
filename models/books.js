const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({

    title: {
         type: String,
         required: true
     },
     author:{
         type: String,
         required: true
     },
     description: {
         type: String,
         required: true
     },
     votes: {
        type: Number,
        required: true
     },
     favourites: {
        type: Number,
        required: true
     },
     date: {
         type: Date,
         default: Date.now
     }
 
 })
 
 module.exports = mongoose.model("Books", booksSchema)
 