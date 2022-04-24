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

//Get User

router.get("/:id", Users.getUser);

//FollowUser

router.put("/follow/:id", Users.followUser);

//UnFollowUser

router.put("/unfollow/:id", Users.unfollowUser);

module.exports = router;
