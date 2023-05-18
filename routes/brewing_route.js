const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



function readBrewingFile() {
  const brewingList = fs.readFileSync("./data/brewing.json");
  const parsedData = JSON.parse(brewingList);
  return parsedData;
}

router.get("/", (req, res) => {
  const brews = readBrewingFile();
  res.json(brews);
});

router.get("/:id", (req, res) => {
  const brews = readBrewingFile();
  const findId = brews.findIndex((brew) => brew.id === req.params.id);
  if (findId === -1) {
    res.status(404).send("brew not found");
  } else {
    res.json(brews[findId]);
  }
});


module.exports = router;