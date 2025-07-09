const http = require("http");

const express = require("express");

const app = express();

// utile per intercettare tutte le richieste diverse da / /add-product
app.use("/", (req, res, next) => {
  console.log("this always run!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware!2");
  res.send("<h1> The 'Add-product' Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello From Express</h1>");
});

const server = http.createServer(app);

server.listen(3000);
