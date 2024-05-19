import mongoose from "mongoose";
// EA7*mP2sqB64DE2
// const DB_URI = process.env;
const DB_URI = `mongodb+srv://studenter1:d"ue78Ew'3Pv@cluster0.dtfqrqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const DB_URI = `mongodb+srv://Pavlo:EA7*mP2sqB64DE2@cluster0.gfm0m36.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
async function run() {
  try {
    // Щоб підключитися до бази даних необхідно викликати метод connect і
    // передати строку підключення до конкретної бази (connct() повертає проміс)
    await mongoose.connect(DB_URI);
    console.log("Database connection successfully");
  } catch (error) {
    console.error("Database connection failure:", error);
  } finally {
    await mongoose.disconnect(); // від'єднуємось від бази даних
  }
}

run().catch(console.error);
// console.log(process.env.DB_URI);
