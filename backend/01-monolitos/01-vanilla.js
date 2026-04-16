const http = require("http");

const servidor = http.createServer((pregunta, respuesta) => {
    
  if (pregunta.url === "/") {
    respuesta.writeHead(200, { "Content-Type": "application/json" });
    respuesta.end(JSON.stringify({ message: "Hello Backend 👋" }));
  } else if (pregunta.url === "/gato") {
    console.log("gato");
    respuesta.writeHead(300, { "Content-Type": "application/json" });
    respuesta.end(JSON.stringify({ message: "Hello Helena👋" }));
  } else {
    respuesta.writeHead(404);
    respuesta.end("Not Found");
  }
});

servidor.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
