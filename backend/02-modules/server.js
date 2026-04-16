const express = require("express");
const morgan = require("morgan");
const router = require ("./routes/books.routes")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"))

app.use("/",router)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});