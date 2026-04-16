//const express = require("express");
const controlador = require("./controller");
const {Router} = require("express")

//const router = express.Router();
const router = Router()

const myMiddleware = (req,res,next)=>{
    console.log("my middleware")
    next()
}

router.get("/", myMiddleware,controlador);

module.exports = router;
