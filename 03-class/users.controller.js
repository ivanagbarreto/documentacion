const servicio = require("./users.service");

//funciones
const create = (req, res) => {
  console.log("acceso al endpoit create");
  res.send(servicio.create());
};

const getAll = (req, res) => {
  console.log("/getAll");
  res.send(servicio.getAll());
};

const getById = (req, res) => {
  console.log("acceso al getById");
  res.send(servicio.getById());
};

const update = (req, res) => {
  console.log("acceso al update");
  res.send(servicio.update());
};

const remove = (req, res) => {
  console.log("acceso al remove");
  res.send(servicio.remove());
};

//metodos
const usersController = {
  create: (req, res) => {
    console.log("acceso al endpoit create");
    res.send(servicio.create());
  },
  getAll: (req, res) => {
    console.log("/getAll");
    res.send(servicio.getAll());
  },
  getById: (req, res) => {
    console.log("acceso al getById");
    res.send(servicio.getById());
  },
  update: (req, res) => {
    console.log("acceso al update");
    res.send(servicio.update());
  },
  remove: (req, res) => {
    console.log("acceso al remove");
    res.send(servicio.remove());
  },
};

//exportacion de funciones module.exports = { getAll, getById, create, update, remove };
module.exports = usersController //exportacion de metodos