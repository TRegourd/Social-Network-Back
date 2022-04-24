const User = require("../models/User");

const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).send(`user ${req.params.id} successfully updated !`);
    } catch (err) {
      return res.status(500).send(err);
    }
  } else {
    res.status(500).send("You can update only your account !");
  }
};

const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.status(200).send(`user ${req.params.id} successfully deleted !`);
    } catch (err) {
      return res.status(500).send(err);
    }
  } else {
    res.status(500).send("You can delete only your account !");
  }
};

const getUser = async (req, res) => {
  try {
    console.log("REQ", req.params.id);
    const user = await User.findById(req.params.id);
    console.log(user);

    if (user === null) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("error");
  }
};

const Users = {
  updateUser,
  deleteUser,
  getUser,
};

module.exports = Users;
