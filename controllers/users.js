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

const Users = {
  updateUser,
};

module.exports = Users;
