var express = require("express");
const Auth = require("../controllers/auth");
var router = express.Router();

/* / */
router.get("/", (req, res) => {
  res.send("auth homepage");
});

/* REGISTER */
router.post("/register", Auth.createNewUser);

/* REGISTER */
router.post("/login", Auth.loginUser);

module.exports = router;
