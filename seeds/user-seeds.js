const { User } = require('../models');

const userData = [
  {
    username: "Shamim",
    email: "shamim@gmail.com",
    password: "password1234"
  },
  {
    username: "Monty",
    email: "monty@gmail.com",
    password: "password1234"
  },
  {
    username: "Mylo",
    email: "mylo@gmail.com",
    password: "password1234"
  },
  {
    username: "Edward",
    email: "ed@gmail.com",
    password: "password1234"
  },
  {
    username: "Johnathan",
    email: "john@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;