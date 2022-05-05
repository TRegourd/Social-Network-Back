var express = require("express");
const Posts = require("../controllers/posts");
var router = express.Router();

// create post

router.post("/", Posts.createPost);

router.put("/:id", Posts.updatePost);

router.delete("/:id", Posts.deletePost);

module.exports = router;
