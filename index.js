const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const indexRouter = require("./routes/index");

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} receieved to ${req.url}`);
  next();
});

app.use(cors());

app.use("/", indexRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
