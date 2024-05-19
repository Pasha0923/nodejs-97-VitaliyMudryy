import express from "express";

const router = express.Router();
// Тут знаходяться всі запити які стосуються книжок
// Робимо запит(route) на отримання всіх книжок
router.get("/", (req, res) => {
  res.send("Books");
});

export default router;
