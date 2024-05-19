import { program } from "commander";

import Books from "./books/index.js"; // імпортуємо Books з файлу index.js (Books це об'єкт з його методами)
// (назва може бути довільною) і обов'язково вказуємо шлях до файлу явно його прописати
// тому що тут не можна просто вказати шлях до папки як в COMMON JS
async function invokeAction({ action, id, title, author }) {
  switch (action) {
    case "getAll":
      const books = await Books.getBooks();
      return books;
    case "getById":
      const book = await Books.getBook(id);
      return book;
    case "create":
      const createdBook = await Books.createBook({ title, author });
      return createdBook;
    case "update":
      const updateBook = await Books.updateBook(id, { title, author });
      return updateBook;
    case "remove":
      const removedBook = await Books.deleteBook(id);
      return removedBook;
    default:
      console.log(action);
      return "unknown action:-(";
  }
}

program
  .option("-a, --action <action>", "Action to invoke")
  .option("-i, --id <id>", "Book id")
  .option("-t, --title <title>", "Book title")
  .option("-at, --author <author>", "Book author");

program.parse(process.argv);

console.log(program.opts());

invokeAction(program.opts()).then(console.log).catch(console.error);
