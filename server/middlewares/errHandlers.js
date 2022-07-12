function errHandler(err, req, res, next) {
  let code = 500;
  let msg = "Internal Server Error";
  if (err.message === "failed_login") {
    code = 401;
    msg = "Invalid Email or Password";
  } else if (
    err.message === "id_not_found_authn" ||
    err.name === "JsonWebTokenError"
  ) {
    code = 401;
    msg = "Token Unauthenticated";
  } else if (err.message === "already_have") {
    code = 409;
    msg = "Already exist";
  }
  res.status(code).json({
    message: msg,
  });
}

module.exports = errHandler;
