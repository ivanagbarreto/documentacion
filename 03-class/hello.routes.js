//const express = require("express");
const controlador = require("./hello.controller");
const { Router } = require("express");

//const router = express.Router();
const router = Router();

const myMiddleware = (req, res, next) => {
  console.log("my middleware");
  next();
};

router.get("/hello", myMiddleware, controlador.helloController);
router.get("/ping", controlador.pingController);

module.exports = router;
