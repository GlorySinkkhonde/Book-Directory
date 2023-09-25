const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const bookRouter = require('./routes/books')

//Express body-parser is an npm module used to process data sent in an HTTP request body. It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.

app.use(bodyParser.json())

//connecting route

//middleware - before you go to books, execute the bookRouter

app.use('/books', bookRouter)

app.get('/', (req, res) => {
    res.send('hey, this is a book directory')
})

app.listen(5000);

//connecting to Database

const dbUrl = process.env.DB_CONNECTION

const conPar =  
    {  useNewUrlParser: true, 
    }

    mongoose.connect(dbUrl, conPar).then(
        () =>{
            console.log("connected")
        }
    ).catch((e) =>{
        console.log('error:')
    })
   