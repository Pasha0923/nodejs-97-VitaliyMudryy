import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  // res.send("Hello, Express:-)))");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
