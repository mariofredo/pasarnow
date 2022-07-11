const express = require("express");
const SearchController = require("../controllers/searchController");
const route = express.Router();

route.get("/", SearchController.getSearch);

module.exports = route;
