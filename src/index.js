const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const { engine } = require("express-handlebars");
const port = 3000;

//HTTP logger
app.use(morgan("combined"));


app.use(express.static(path.join(__dirname, "public")));
// template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
