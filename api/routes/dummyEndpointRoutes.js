const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "get request",
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "post request",
  });
});

module.exports = router;
