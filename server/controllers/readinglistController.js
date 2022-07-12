const { ReadingList } = require("../models");
class ReadingListController {
  static async addReadingList(req, res, next) {
    try {
      const { userId } = req.dataUser;
      const { link, title } = req.body;
      const newReadinglist = await ReadingList.create({
        userId,
        link,
        title,
      });
      res.status(201).json({
        newReadinglist,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = ReadingListController;
