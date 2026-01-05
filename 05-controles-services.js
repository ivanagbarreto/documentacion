const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"))


let librosDB = [
  {
    id: 1,
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    anio: 1953,
  },
];

const servicio = {
  getAll: () =>  librosDB,
  hola:"hola123"
}

const controlador = {
    getAll: (req, res)=>{res.json(servicio.getAll());}
}

const router = express.Router()

router.get("/api/libros",controlador.getAll)

app.use("/",router)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});