import express from "express";

import routes from "./routes/index.js"; // імпортуємо всі маршhути (router)
// і зберігаємо іх у змінну routes
const app = express();

app.use(routes);

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
