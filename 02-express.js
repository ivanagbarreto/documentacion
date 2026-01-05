const express = require("express");
const morgan = require("morgan");

const app = express();

//middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"))

app.use((req, res, next) => {
  
  if (req.headers.authorization == "1234"){
   console.log("autorizado");
   //res.json({message:"autorizado"}) 
   next(); 
  } else {
    res.status(300).json ({message: "no estas autorizado"})
  }
 // next ()
});

const mockDataBase = [
  { id: 1, name: "Helena" },
  { id: 2, name: "Tom" },
];
app.post("/api/gatos/create", (req, res) => {
  const newId = mockDataBase.length + 1;
  console.log(newId);
  const gatoNuevo = { id: newId, ...req.body };
  mockDataBase.push(gatoNuevo);
  res.json(gatoNuevo);
});
app.get("/api/gatos/getAll", (req, res) => {
  res.json(mockDataBase);
});

app.get("/api/gatos/:id", (req, res, next) => {
 // console.log(typeof gatoDb.id)
  console.log(typeof +req.params.id)
  const posicionDelGato = mockDataBase.findIndex((gatoDb) => gatoDb.id === Number(req.params.id));
  if (posicionDelGato == -1){
    next({message:"gato no encontrado"})
  }
  res.json(mockDataBase[posicionDelGato]);

});

app.put("/api/gatos/update/:id", (req, res) => {
  const findItem = mockDataBase.find((item) => item.id === req.params.id);
  findItem.name = req.body.name;
  res.json(findItem);
});
app.delete("/api/gatos/delete/:id", (req, res) => {
  const gatoIndex = mockDataBase.findIndex((gatoDb) => gatoDb.id == req.params.id);
  console.log(gatoIndex);
  if (gatoIndex == -1) return res.json({ message: "Gato no encontrado" });
  const gato1 = mockDataBase[gatoIndex];
  console.log(gato1);
  //const gato = mockDataBase.splice(gatoIndex, 1);
  //console.log(gato)
  res.json({ message: "Gato eliminado " + gato1.name, gato: gato1 });
});
app.use((req,res)=>{
  res.json({message:"Esta página no existe"})
})

app.use((err, req,res,next)=>{
  res.json(err)
})
app.listen(3000, () => {
  console.log(`Servidor Express en http://localhost:3000`);
});
