const servicio = require("../services/books.services")


const controlador = {
    getAll: (req, res)=>{res.json(servicio.getAll());}
}

module.exports = controlador