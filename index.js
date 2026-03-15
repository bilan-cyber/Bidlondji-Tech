const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Bienvenue sur BTC Platform 🚀");
  res.end();
});

server.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});