const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({
        username,
        email,
        password,
      });
      delete user.password;
      res.status(201).json({
        message: "Register success",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) throw new Error("failed_login");

      const isValid = compareSync(password, user.password);

      if (!isValid) throw new Error("failed_login");

      const payload = {
        userId: user.id,
        userEmail: user.email,
      };
      const access_token = sign(payload, process.env.SECRET_KEY);

      res.status(200).json({
        access_token,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
