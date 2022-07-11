class UserController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
