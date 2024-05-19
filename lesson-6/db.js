// тут connect_имось до бази даних за допомогою mongoose
import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then(() => console.log("Database connection successfully"))
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1); // ця команда закриває запущений процес
  });
