// app.js
// CRUD de Libros usando Express + mockData (CommonJS)

const express = require("express");
const morgan = require("morgan");
//const express = require("body-parser");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"))
app.use(express.static("public"));
// --------------------
// Mock Data
// --------------------
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

// --------------------
// GET - obtener todos los libros
// --------------------
app.get("/libros", (req, res) => {
  res.json(librosDB);
});

// --------------------
// GET - obtener un libro por ID
// --------------------
app.get("/libros/:id", (req, res) => {
  const id = Number(req.params.id);
  const libro = librosDB.find((l) => l.id === id);
  console.log(libro);
  console.log(!libro);
  console.log(!!libro);
    //if (!libro) {
    if (libro == undefined) {
    return res.status(404).json({ message: "Libro no encontrado" });
  }

  res.json(libro);
});

// --------------------
// POST - crear un libro
// --------------------
app.post("/libros", (req, res) => {
  const { titulo, autor, anio } = req.body;

  if (!titulo || !autor || !anio) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  const nuevoLibro = {
    id: librosDB.length ? librosDB[librosDB.length - 1].id + 1 : 1,
    titulo,
    autor,
    anio,
  };

  librosDB.push(nuevoLibro);

  res.status(201).json(nuevoLibro);
});

// --------------------
// PUT - actualizar un libro
// --------------------
app.put("/libros/:id", (req, res) => {
  const id = Number(req.params.id);
  const { titulo, autor, anio } = req.body;

  const index = librosDB.findIndex((l) => l.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Libro no encontrado" });
  }

  librosDB[index] = {
    ...librosDB[index],
    titulo: titulo ?? librosDB[index].titulo,
    autor: autor ?? librosDB[index].autor,
    anio: anio ?? librosDB[index].anio,
  };

  res.json(librosDB[index]);
});

// --------------------
// DELETE - eliminar un libro
// --------------------
app.delete("/libros/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const index = librosDB.findIndex((l) => l.id === id);

  if (index === -1) {
    //return res.status(404).json({ message: "Libro no encontrado" });
    return next({ message: "Libro no encontrado" })
   
  }

  const libroEliminado = librosDB.splice(index, 1);

  res.json({ message: "Libro eliminado", libro: libroEliminado[0] });
});
app.use((req,res)=>{
  //res.json({message:"Esta página no existe"})
  res.sendFile("./public/404.html",{root:__dirname})
})

app.use((err, req,res,next)=>{
  res.json(err)
})
// --------------------
// Server
// --------------------
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
