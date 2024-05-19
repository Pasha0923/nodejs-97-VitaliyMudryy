import express from "express";

const router = express.Router();
// запит на нові книжки
router.get("/", (req, res) => {
  res.send("Wishlist");
});

export default router;
