const http = require("http");

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// è possibile aggiungere  una rotta genitore che comprenmda tutte le relative sottorotte
app.use("/admin", adminRouter);
app.use(shopRouter);
// utile per intercettare tutte le richieste diverse da / /add-product
/*
app.use("/", (req, res, next) => {
  next();
});
*/
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const server = http.createServer(app);

server.listen(3000);
