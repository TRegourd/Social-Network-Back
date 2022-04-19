var express = require("express");
const Users = require("../controllers/users");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("users homepage");
});

//Update User

router.put("/:id", Users.updateUser);

//Delete User

router.delete("/:id", Users.deleteUser);

module.exports = router;
