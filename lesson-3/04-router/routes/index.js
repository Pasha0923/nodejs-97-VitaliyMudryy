// Цей файл index.js це по суті вузол з якого будуть розходитися всі route нашого додатку
import express from "express";

// Імпортуємо сюди файли с машррутами
import userRoutes from "./users.js";
import bookRoutes from "./books.js";
import movieRoutes from "./movies.js";
import wishlistRoutes from "./wishlist.js";

const router = express.Router();
// Якщо запит починається з /users то перенаправ в userRoutes і т.д
// метод use може приймати url для якої він має виконуватися!
router.use("/users", userRoutes);
router.use("/books", bookRoutes);
router.use("/movies", movieRoutes);
router.use("/wishlist", wishlistRoutes);

export default router;
