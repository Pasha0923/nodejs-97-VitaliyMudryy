import * as fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto"; // модуль crypto для генерування унікального id

// У СOMMONJS!
// const crypto = require("node:crypto");
console.log(crypto.randomUUID()); // crypto має метод randomUUID() який генерує id шки
const filePath = path.resolve("books", "books.json"); // модуль path має метод resolve(вказуємо абсолютний шлях)
console.log("filePath: ", filePath);

async function readBooks() {
  // функція для зчитування файлу за "books.json" за абсолютним шляхом
  const data = await fs.readFile(filePath, { encoding: "utf-8" });

  return JSON.parse(data);
}
// функція для перезапису  файлу  "books.json"
async function writeBooks(books) {
  await fs.writeFile(filePath, JSON.stringify(books, undefined, 2));
}

async function getBooks() {
  const books = await readBooks();

  return books;
}

async function getBook(id) {
  const books = await readBooks();

  const book = books.find((book) => book.id === id);

  if (typeof book === "undefined") {
    return null;
  }

  return book;
}

async function createBook(book) {
  const books = await readBooks();

  const newBook = { ...book, id: crypto.randomUUID() };

  books.push(newBook);

  await writeBooks(books);

  return newBook;
}

async function updateBook(id, book) {
  const books = await readBooks();

  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return null;
  }

  const updatedBook = { ...book, id };

  // const newBooks = [
  //   ...books.slice(0, index),
  //   updatedBook,
  //   ...books.slice(index + 1),
  // ];

  // await writeBooks(newBooks);

  books[index] = updatedBook;

  await writeBooks(books);

  return updatedBook;
}

async function deleteBook(id) {
  const books = await readBooks();

  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return null;
  }

  const removedBook = books[index];

  // const newBooks = [...books.slice(0, index), ...books.slice(index + 1)];

  // await writeBooks(newBooks);

  books.splice(index, 1);

  await writeBooks(books);

  return removedBook;
}

export default {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
