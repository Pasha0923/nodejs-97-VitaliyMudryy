import * as fs from "node:fs/promises";
import path from "node:path";

import cors from "cors";
import express from "express";

const app = express();
// Приймаюча сторона(бекед) робить дозввіл тому домену який робить запит на бекенд
// В нашому випадку це дозвіл на цю адресу "http://localhost:3000"
// app.use(cors()) - в такому випадку будь-який домен може робити запит на наш webserver
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
// Напишемо http запит на отриання фільмів
app.get("/movies", async (req, res) => {
  const data = await fs.readFile(path.resolve("movies.txt"), {
    encoding: "utf-8",
  });

  res.send(data);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
