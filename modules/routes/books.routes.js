const express = require ("express")
const controlador = require ("../controller/books.controllers")

const router = express.Router()

router.get("/api/libros",controlador.getAll)

module.exports = router