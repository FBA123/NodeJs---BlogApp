const express = require('express')
const router = express.Router()

router.get("", (req, res) => {
  res.send("NodeJs Blog App");
});

module.exports = router