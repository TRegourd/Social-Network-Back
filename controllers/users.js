const User = require("../models/User");

const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.user.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).send(`user ${req.params.id} successfully updated !`);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
};

const Users = {
  updateUser,
};

module.exports = Users;
