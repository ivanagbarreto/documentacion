const controlador = require("./users.controller");
const { Router } = require("express");

const router = Router();

router.post("/users", controlador.create);
router.get("/users", controlador.getAll);
router.get("/users/1", controlador.getById);
router.put("/users/1", controlador.update);
router.delete("/users/1", controlador.remove);

module.exports = router;
