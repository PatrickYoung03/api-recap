const express = require("express");
const router = express.Router();
const { addBootcamper, fetchBootcampers } = require("../models/index");

router.get("/bootcampers", async (req, res) => {
  const result = await fetchBootcampers();
  if (result) {
    res.json({ success: true, data: result });
  }
  res.json({ success: false });
});

router.post("/post", async (req, res) => {
  const { body } = req;
  console.log(body);
  const result = await addBootcamper(body);
  if (result) {
    res.json({ success: true, message: "successfully added a bootcamper" });
  }
  res.json({ success: false });
});

module.exports = router;
