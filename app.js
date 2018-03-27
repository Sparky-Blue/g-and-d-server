const app = require("express")();
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser").json;

app.use(bodyParser());

app.get("/", (req, res) => res.send("all good!"));

app.use("/api", apiRouter);

app.use("/*", (req, res, next) => {
  res.status(404)
  next({status:404})
});

app.use((err, req, res, next) => {
  if (err.status === 404) return res.status(404).send("page not found");
  next(err)
});

app.use((err, req, res, next) => {
  res.status(500).send("Internal Server Error");
});

module.exports = app;