const express = require('express') // require the express package
const cors = require('cors');
const app = express() // initialize your express app instance   
const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();
const {seedUserData} = require('./model/User.model')
const userController= require('./controllers/User.controller')
const {userModel}= require('./model/User.model')

 
const PORT = process.env.PORT

app.use(cors());
// a server endpoint 


mongoose.connect('mongodb://localhost:27017/FavoriteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

seedUserData();


app.get('/books', userController)

app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 
 app.listen(PORT ,()=>{
     console.log(`running on port ${PORT}`)
 })
 

//app.listen(8080)
   

