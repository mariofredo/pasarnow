const express = require("express");
const router = express.Router();

const user = require("../routes/users");

router.use("/users", user);
router.use("/search");
router.use("/readinglist");
router.use(errHandler);
module.exports = router;
