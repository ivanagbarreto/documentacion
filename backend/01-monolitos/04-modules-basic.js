const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"))
app.use(express.static("public"));

let librosDB = [
  {
    id: 1,
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    anio: 1953,
  },
  {
    id: 2,
    titulo: "La metamorfosis",
    autor: "Franz Kafka",
    anio: 1915,
  },
];
const servicio = {
  getAll: () =>  librosDB,
  hola:"hola123"
}
// console.log(servicio.getAll())
// console.log(servicio.getAll)
// console.log(servicio.hola)

// const miFuncion = servicio.getAll
// console.log(miFuncion())

const controlador = {
    getAll: (req, res)=>{res.json(servicio.getAll());}
}
const router = express.Router()
router.get("/libros",controlador.getAll)
//  metodo  --endpoint--controlador(funcion/metodo)



// --------------------
// GET - obtener todos los libros
// --------------------
// app.get("/libros", (req, res) => {
//   res.json(librosDB);
// });
app.use("/api",router)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
