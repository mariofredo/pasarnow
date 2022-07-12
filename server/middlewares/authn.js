const { verify } = require("jsonwebtoken");
const { User } = require("../models");
async function authn(req, res, next) {
  try {
    const { access_token } = req.headers;
    const payload = verify(access_token, process.env.SECRET_KEY);
    const user = await User.findOne({
      where: {
        id: payload.userId,
      },
    });
    if (!user) {
      throw new Error("id_not_found_authn");
    }
    req.dataUser = {
      userEmail: user.email,
      userId: user.id,
    };
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authn;
