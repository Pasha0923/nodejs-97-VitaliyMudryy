import Book from "../models/book.js"; // імпортували нашу модель з папки models і файлу book.js і в змінну Book
// тут знаходяться обробники наших роутів , логіка описана в controllers
async function getBooks(req, res, next) {
  try {
    const books = await Book.find({ favorite: true, genre: "Sci-Fi" });

    res.send(books);
  } catch (error) {
    next(error);
  }
}

async function getBook(req, res, next) {
  const { id } = req.params;

  try {
    // отримуємо книгу за id
    const book = await Book.findById(id);
    console.log("book: ", book);

    if (book === null) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.send(book);
  } catch (error) {
    next(error);
  }
}

async function createBook(req, res, next) {
  // Add Joi here
  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
    pages: req.body.pages,
  };

  try {
    // Mongoose-методи для роботи з колекцією контактів в базі даних.
    // Для створення книги є метод create() викликаємо його у моделі Book
    const result = await Book.create(book);
    console.log(" result: ", result);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
}

async function updateBook(req, res, next) {
  try {
    const { id } = req.params;

    // Add Joi here
    const book = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      year: req.body.year,
      pages: req.body.pages,
    };
    // метод по замовчуванню повертає попередню версію документа , опція new: true повертає актуальну версію
    const result = await Book.findByIdAndUpdate(id, book, { new: true });
    console.log("result: ", result);

    if (result === null) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
}

async function deleteBook(req, res, next) {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (result === null) {
      return res.status(404).send({ message: "Book not found" });
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

export default { getBooks, getBook, createBook, updateBook, deleteBook };
