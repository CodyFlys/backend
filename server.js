const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const postsRouter = require("./posts/posts-router");
const authenticate = require("./auth/authenticate-middleware")
const usersRouter = require("./users/users-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/posts", authenticate, postsRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;