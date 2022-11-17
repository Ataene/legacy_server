require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")

const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

const databaseConnect = process.env.databaseConnect;

const dataRouter = require("./routes/dataRouter");

app.use("/data", dataRouter);

mongoose
  .connect(
    databaseConnect,
    { useNewUrlParser: true, useUnifiedTopology: true },
    { useMongoClient: true }
  )
  .then((result) =>
    app.listen(PORT, function () {
      console.log(`Server is running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
