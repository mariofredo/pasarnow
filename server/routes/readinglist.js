const express = require("express");
const route = express.Router();
const ReadingListController = require("../controllers/readinglistController");
route.post("/", ReadingListController.addReadingList);
module.exports = route;
