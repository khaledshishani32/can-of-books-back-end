const express = require('express') // require the express package
const cors = require('cors');
const app = express() // initialize your express app instance   
const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());
const {
    getbooks,
    createbooks,
    updatebooks,
    deletebooks
} = require('./controllers/User.controller');
const {seedUserData} = require('./model/User.model')
const userController= require('./controllers/User.controller')
//const {userModel}= require('./model/User.model')

 
const PORT = process.env.PORT

app.use(cors());
// a server endpoint 


mongoose.connect('mongodb://localhost:27017/FavoriteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

//seedUserData();


app.get('/books', getbooks)

app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
app.post('/book', createbooks);
// Update route, will will receive the cat id that we want to update, and its info in the body payload
app.put('/book/:book_idx', updatebooks);
// Delete route, which will delete the cat by its index
app.delete('/book/:book_idx', deletebooks)
 
 app.listen(PORT ,()=>{
     console.log(`running on port ${PORT}`)
 })
 

//app.listen(8080)
   

