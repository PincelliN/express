const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(shopRouter);
// utile per intercettare tutte le richieste diverse da / /add-product
/*
app.use("/", (req, res, next) => {
  next();
});
*/
app.use((req, res, next) => {
  res.status(404).send("<h1> Page not Found </h1>");
});

const server = http.createServer(app);

server.listen(3000);
