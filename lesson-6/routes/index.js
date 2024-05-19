// тут обєднуються всі роути які є в нашому додатку
import express from "express";

import bookRoutes from "./books.js"; // імпортуємо файл books.js

const router = express.Router();

router.use("/books", bookRoutes);

export default router;

// треба перед ? вказати назву бази даних до якої будемо коннектитись і в якій будуть зберігатися наші дані
