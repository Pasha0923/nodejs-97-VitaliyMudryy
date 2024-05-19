import "dotenv/config";

import express from "express";
// імпортуємо всі роути які знаходяться папці routes в файлі  index.js і в змінну routes зберігаємо
import routes from "./routes/index.js";

import "./db.js";

const app = express();

app.use("/api", routes);

// Handle 404 Error (мідлвара для роутів які не знайдено)
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// Handle 500 Error (мідлвара для помилок які стаються в нашому коді)
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Internal Server Error");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
