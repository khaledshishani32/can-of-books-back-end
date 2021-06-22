
'use strict'


const {userModel} = require('../model/User.model');

const getBooks = (req , res )=>{

    const { email } = req.query;

    userModel.findOne({ email: email }, (error, user) => {
        if (error) {
            res.send(error)
        } else {
            res.json(user)
        }
    });
}

    



module.exports = getBooks;