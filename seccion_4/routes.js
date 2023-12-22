//logica de ruteo, controla rutas y ahce cosas

const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Hola</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button>Enviar</button type='submit'></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hola</title></head>");
  res.write("<body><h1>Posnet</h1></body>");
  res.write("</html>");
};

//keyword de node, objeto global, expuesto por node, permite importar el valor del modulo a cualquier archivo en nuestro proyecto, se puede importar un objeto con varias keys, valores
module.exports = requestHandler;
