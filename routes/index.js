const express = require('express');

const router = new express.Router();

router.get("/data", require("../controllers/SendData.js"));
router.get("/link", require("../controllers/LinkData.js"));

router.post("/data/:data", require("../controllers/DataForDb.js"))

module.exports = router