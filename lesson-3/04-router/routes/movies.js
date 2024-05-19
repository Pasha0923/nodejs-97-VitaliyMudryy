import express from "express";

const router = express.Router();
// запит на отримання фільмів
router.get("/", (req, res) => {
  res.send("Movies");
});

export default router;
