const express = require("express");
const SearchController = require("../controllers/searchController");
const route = express.Router();

route.get("/", SearchController.getSearch);
route.get("/images", SearchController.getImages);
route.get("/news", SearchController.getNews);
module.exports = route;
