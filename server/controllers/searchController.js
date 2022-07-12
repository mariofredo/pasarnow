const axios = require("axios");
require("dotenv").config();

class SearchController {
  static async getSearch(req, res, next) {
    try {
      const { s } = req.query;
      const { data } = await axios({
        method: "GET",
        url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${s}`,
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "EU",
          "X-RapidAPI-Key": process.env.API_KEY,
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      });
      res.status(200).json({
        data: data.results,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async getImages(req, res, next) {
    try {
      const { s } = req.query;
      const { data } = await axios({
        method: "GET",
        url: `https://google-search3.p.rapidapi.com/api/v1/image/q=${s}`,
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "EU",
          "X-RapidAPI-Key": process.env.API_KEY,
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      });
      res.status(200).json({ data: data.image_results });
    } catch (err) {
      next(err);
    }
  }

  static async getNews(req, res, next) {
    try {
      const { s } = req.query;
      const { data } = await axios({
        method: "GET",
        url: `https://google-search3.p.rapidapi.com/api/v1/news/q=${s}`,
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "EU",
          "X-RapidAPI-Key": process.env.API_KEY,
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      });
      res.status(200).json({ data: data.entries });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SearchController;
