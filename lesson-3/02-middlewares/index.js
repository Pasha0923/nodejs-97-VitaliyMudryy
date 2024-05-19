import * as fs from "node:fs/promises";
import path from "node:path";

import express from "express";

const app = express();
// Для того щоб зчитати будь який query параметр треба у req викликати метод query
// ТОбто у req.query вже знаходяться розпарсені query параметри
function checkAuth(req, res, next) {
  if (req.url === "/users" && req.method === "GET") {
    return next();
  }

  const { apiKey } = req.query;
  // Перевірка чи є у користувача APIKEY
  if (apiKey !== "12345") {
    return res.status(401).send("Please provide a valid API Key!");
  }

  next();
}
app.use(checkAuth);

// робимо запит за шляхом "/movies" методом get отримати у відповідь файл з фільмами
app.get("/movies", checkAuth, async (req, res) => {
  const data = await fs.readFile(path.resolve("movies.txt"), {
    encoding: "utf-8",
  });
  res.send(data);
});

app.get("/books", (req, res) => {
  res.send("Books");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
