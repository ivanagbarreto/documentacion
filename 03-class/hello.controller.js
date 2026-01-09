const servicio = require("./hello.service");

const helloController = (req, res) => {
  console.log("probando /hello");
  res.send(servicio.hello());
};

const pingController = (req, res) => {
  console.log("probando /ping");
  res.send(servicio.ping());
};

//antes eran funciones ahora son metodos
const controlador = {
  helloController: (req, res) => {
    console.log("probando /hello");
    res.send(servicio.hello());
  },
  pingController: (req, res) => {
    console.log("probando /ping");
    res.send(servicio.ping());
  },
};

module.exports = controlador;
