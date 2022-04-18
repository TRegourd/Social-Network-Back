const User = require("../models/User");

const createNewUser = (req, res) => {
  const userForm = req.body;

  const user = new User(userForm);

  User.create(user)
    .then((result) => {
      res.status(200);
      res.send(`User created`);
      console.log(`User created`);
    })
    .catch((error) => console.log(error));
};

const loginUser = (req, res) => {
  let user;

  User.findOne({ email: req.body.email })
    .then((result) => {
      if (!result) {
        res.status(404).send("user not found");
      } else {
        user = result;
        if (req.body.password != user.password) {
          res.status(400).send("wrong password");
        } else {
          res.send(user);
        }
      }
    })
    .catch((error) => console.log(error));
};

const Auth = {
  createNewUser,
  loginUser,
};

module.exports = Auth;
