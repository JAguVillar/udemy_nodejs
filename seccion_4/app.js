const http = require("http");
const express = require("express");

const app = express();

//middleware basico
//esta funcion que le pasamos a app, sera ejecutada por cada peticion o solicitud entrante
//esta funcion recibe 3 parametros req, res, next
//req es la solicitud entrante, res es la respuesta de la aplicacion, next es una funcion que se ejecuta despues de la funcion anterior
// app.use((req, res, next) => {
//   console.log("Middleware");
//   next(); //permite ejecutar el siguiente middleware en fila
// });
// app.use((req, res, next) => {
//   console.log("Middleware 2");
//   res.send("<h1>Hola mundo</h1>"); //envia la respuesta al cliente, reemplaza a write
// });

//aqui usamo el middleware approach para controlar lo que queremos mostrar y el orden
//enrutamos nuestras requests en diferentes middlewares

app.use("/ruta", (req, res, next) => {
  console.log("Middleware 2");
  res.send("<h1>Ruta</h1>"); //envia la respuesta al cliente, reemplaza a write
});
app.use("/", (req, res, next) => {
  console.log("Middleware 2");
  res.send("<h1>Hola mundo</h1>"); //envia la respuesta al cliente, reemplaza a write
});

// const server = http.createServer(app);
// server.listen(3000);

//lo de arriba es lo mismo que abajo, solo escrito con express

app.listen(3000);
