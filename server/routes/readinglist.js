const express = require("express");
const route = express.Router();
const ReadingListController = require("../controllers/readinglistController");
route.get("/", ReadingListController.getAllReadingList);
route.post("/", ReadingListController.addReadingList);
route.delete("/:id", ReadingListController.deleteReadingList);
module.exports = route;
