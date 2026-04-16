const objeto1 = { saludo: "hola mundo" };

//console.log(objeto1.saludo)

class Clase1 {
  get() {
    return "hello world";
  }
}
const instanciaClase1 = new Clase1();
const instanciaClase2 = new Clase1();

//console.log(instanciaClase1.get())

const array1 = [1, 2, 3];

//console.log(array1[0])

array1.push(4);

//console.log(array1)

//console.log(crypto.randomUUID());
const opcion1 = true;
const opcion2 = false;

// console.log(true == opcion2)
// console.log(1 == opcion2)
// console.log([1] == opcion2)
// console.log(false == opcion2)
// console.log({} == opcion2)
// console.log("hola" == opcion2)
// console.log({nombre:"Helena"} == undefined)
// console.log(undefined == undefined)

const objeto2 = {
  nombre: "Helena",
  edad: 8,
  color: () => {
    return "gris y blanco";
  }, //metodo
};

class Clase2 {
  color = () => {
    return "gris y blanco";
  };
}
const clase2 = new Clase2();

console.log(clase2.color());

const { color } = objeto2;
console.log(color());
console.log(objeto2.color());

const { nombre } = objeto2;

console.log(nombre);
console.log(objeto2.nombre);
// console.log(objeto2.nombre)

// console.log(true || "segundo")
// console.log("primero" || "segundo")
// console.log(false || "segundo")
// console.log(undefined || "segundo")

const ternaria1 = true ? "primero" : "segundo";
const ternaria2 = [].length ? "primero" : "segundo";
//console.log(ternaria1)

const ternaria3 = true ?? "segundo";
const ternaria4 = "primero" ?? "segundo";

//console.log(ternaria3)
//console.log(ternaria4)
