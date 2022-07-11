const axios = require("axios");

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
          "X-RapidAPI-Key":
            "ab6678debdmshb3e6174e1669fc7p135dfcjsn422e551d397a",
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      });
      res.status(200).json({
        data: data.results,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SearchController;
