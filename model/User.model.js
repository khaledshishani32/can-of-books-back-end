"use strict";

const mongoose = require("mongoose");
const bookSchema = require("./Books.model");

const userSchema = new mongoose.Schema({
  email: { type: String },
  books: [bookSchema],
});

const userModel = mongoose.model("users", userSchema);

const seedUserData = () => {
  const newUser = new userModel({
    email: "khaled.shishani32@gmail.com",
    books: [
      {
        name: "Introduction to Algorithms by Thomas H. Cormen",
        description:
          "This is one of the most popular algorithm books, but be aware that it contains a heavy dose of theory. The current edition of this book is the 3rd Edition, and I strongly suggest that every programmer should have this in their bookshelf, but only for short reading and references.",
        status: "best one ",
      },
      {
        name: "The River Cottage Cookbook",
        description:
          "Changing one’s relationship with food “involves no sacrifice, no hardship or discomfort,” Hugh Fearnley-Whittingstall writes, in his poetic ode to the hands-on, homestead-ish life.",
        status: "Hugh Fearnley-Whittingstall (2001) ",
      },
      {
        name: "Churchill: Walking with Destiny",
        description:
          "We think of Churchill as a hero who saved civilization from the evils of Nazism and warned of the grave crimes of Soviet communism, but Roberts's masterwork reveals that he has as much to teach us about the challenges leaders face today - and the fundamental values of courage, tenacity, leadership and moral conviction.",
        status: " Andrew Roberts ",
      },
    ],
  });
  
  newUser.save();
};

module.exports = {
  userModel,
  seedUserData,
};
