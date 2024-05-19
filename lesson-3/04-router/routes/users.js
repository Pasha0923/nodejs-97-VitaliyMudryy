import express from "express";

const router = express.Router();
// робимо запит на отримання всіх користувачів в системі
router.get("/", (req, res) => {
  res.send("Users");
});

export default router;
