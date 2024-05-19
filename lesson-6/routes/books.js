// тут роути які стосуються книжок

import express from "express";

import BookController from "../controllers/book.js"; // імпортуємо об'єкт з методами і зберігаю в змінну

const router = express.Router();

const jsonParser = express.json(); // для post і put запитів для того щоб розпарсити дані з body

// роути для того щоб робити CRUD операції над книжками
router.get("/", BookController.getBooks);
router.get("/:id", BookController.getBook);
router.post("/", jsonParser, BookController.createBook);
router.put("/:id", jsonParser, BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

export default router;
// put і patch
// put запит - якщо put запит то оновлюємо всі дані про книжку
// patch запит - якщо хочемо оновити 1 або 2 поля у сутності
