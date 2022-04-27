var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");

require("./dbConnect");

// donne le chemin d'accès au ficher .env
dotenv.config({ path: __dirname + "/.env" });

//conection à la DB
// mongoose.connect(
//   process.env.MONGO_URL,
//   { useNewUrlParser: true, useCreateIndex: true },
//   () => {
//     console.log("contected to MongoDB");
//   }
// );

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var postRouter = require("./routes/posts");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
