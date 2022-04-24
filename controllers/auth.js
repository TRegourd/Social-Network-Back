const User = require("../models/User");
const bcrypt = require("bcrypt");
const { is } = require("express/lib/request");
const saltRounds = 10;

const createNewUser = async (req, res) => {
  const userForm = req.body;

  userForm.password = await bcrypt.hash(userForm.password, saltRounds);

  const isUser = await User.find({ email: userForm.email });

  if (isUser.length === 0) {
    try {
      const user = new User(userForm);
      User.create(user).then(() => {
        res.status(200);
        console.log(`User created`);
        res.send(`User created`);
      });
    } catch (error) {
      console.log(error), res.senStatus(500);
    }
  } else {
    res.status(400), console.log(`User already exists`);
    res.send(`User already exists`);
  }
};

const loginUser = async (req, res) => {
  if (!req.body.email || !req.body.password) return res.sendStatus(400);

  let user = await User.findOne({ email: req.body.email });

  if (user === null) {
    res.status(400).send("No user found");
  }

  let matchingPassword = await bcrypt.compare(req.body.password, user.password);

  if (matchingPassword) {
    res.status(200).send("Successfully Login");
  } else {
    res.status(400).send("Incorrect Login");
  }
};

const Auth = {
  createNewUser,
  loginUser,
};

module.exports = Auth;
