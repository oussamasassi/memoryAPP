const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use(body_parser.json({ limit: "30mb", extended: "true" }));
app.use(body_parser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, PATCH, GET, DELETE, OPTIONS"
  );
  next();
});

app.use(cors());
//import routes
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);
app.get("/", (req, res) => {
  res.send("Welcome to memories API");
});
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`listen on the port ${PORT}`)))
  .catch((error) => console.error(error));
