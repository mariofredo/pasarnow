const { ReadingList } = require("../models");
class ReadingListController {
  static async addReadingList(req, res, next) {
    try {
      const { userId } = req.dataUser;
      const { link, title } = req.body;
      const find = await ReadingList.findOne({
        where: {
          link,
        },
      });
      if (find) {
        throw new Error("already_have");
      }
      const newReadinglist = await ReadingList.create({
        userId,
        link,
        title,
      });
      res.status(201).json({
        newReadinglist,
      });
    } catch (err) {
      next(err);
    }
  }
  static async getAllReadingList(req, res, next) {
    try {
      const { userId } = req.dataUser;
      const lists = await ReadingList.findAll({
        where: {
          userId,
        },
      });
      res.status(200).json(lists);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ReadingListController;
