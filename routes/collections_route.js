const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



function readCollectionsFile() {
  const collectionsList = fs.readFileSync("./data/collections.json");
  const parsedData = JSON.parse(collectionsList);
  return parsedData;
}

router.get("/", (req, res) => {
  const collections = readCollectionsFile();
  res.json(collections);
});

router.get("/:id", (req, res) => {
  const collections = readCollectionsFile();
  const findId = collections.findIndex((collections) => collections.id === req.params.id);
  if (findId === -1) {
    res.status(404).send("brew not found");
  } else {
    res.json(collections[findId]);
  }
});


module.exports = router;