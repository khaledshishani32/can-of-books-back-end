const express = require('express') // require the express package
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express() // initialize your express app instance
 
const PORT = process.env.PORT

app.use(cors()) ;
// a server endpoint 

app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 
 app.listen(PORT ,()=>{
     console.log(`running on port ${PORT}`)
 })
 

//app.listen(8080)
   

