var express = require("express");
const Posts = require("../controllers/posts");
var router = express.Router();

// create post

router.post("/", Posts.createPost);

module.exports = router;
