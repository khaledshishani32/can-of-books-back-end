"use strict";

const  {userModel}  = require("../model/User.model");

const getbooks = (req, res) => {
  const  {email}  = req.query;

  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      res.send(error);
      //console.log(error)
    } else {
      res.json(user);
      //console.log(user)
    }
  });
};
const createbooks = (request, response) => {
    // we need to get the email of the person and the cat name to add to that person

    console.log(request.body)
    const { email, books } = request.body;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            // here we are going to add the new cat
            userData.books.push(books);
            userData.save();
            response.json(userData);
        }
    })
}

const updatebooks = (request, response) => {
    console.log(request.params)
    const booksIndex = request.params.books_idx;
    const { email, books } = request.body;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(booksIndex, 1, books);
            userData.save();
            response.send(userData)
        }

    });
}

const deletebooks = (request, response) => {
    console.log(request.params)
    const booksIndex = request.params.books_idx;
    const { email } = request.query;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(booksIndex,1);
            userData.save();
            response.send(userData)
        }

    });
}



module.exports ={ 
    
    getbooks,
    createbooks,
    updatebooks,
    deletebooks

};
