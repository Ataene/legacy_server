const express = require("express");
const router = express.Router();

const Data = require("../models/data");

router.get("/", async (req, res) => {
  const allData = await Data.find({});
  res.send(allData);
});

router.post("/", async (req, res) => {
  const newData = req.body;
  try {
    await Data.create(newData);
  } catch (error) {
    res.status(500).send(error);
    console.log(error.message);
  }
});
router.put("/:id", async (req, res) => {
  const updatedData = req.body;
  const id = req.params.id
  try {
    let newData = await Data.findByIdAndUpdate(id, updatedData);
    res.send(newData);
  } catch (error) {
    console.log(error);
    if (error.code === 1100) {
      res.status(409).send("newData" + updatedData + "exist");
    } else {
      res.sendStatus(500);
    }
  }
});

//Working Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
     const dataToDelete = await Data.findByIdAndDelete(id)
     res.send("deleted")
  } catch (error) {
    res.sendStatus(500);
  }
});
module.exports = router;
