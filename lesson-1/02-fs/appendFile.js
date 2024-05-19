const fs = require("node:fs/promises");

fs.appendFile("appendFile.txt", "I like Node.js\n")
  .then(() => console.log("Welldone!"))
  .catch((error) => console.error(error));
