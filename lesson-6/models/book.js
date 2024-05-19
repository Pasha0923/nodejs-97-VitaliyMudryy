import mongoose from "mongoose";
// Описуємо схему книги (як буде виглядати документ книги в колекції books)
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // тобто поле title є обовязковим у книги ( властивість required)
      match: /^[A-Za-z0-9\s\-_,\.;:()]+$/, // (значення поля повинно задовільняти регулярному виразу)
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
      enum: [
        // тобто поле genre є одним з перелічених значень варіантів
        "Action",
        "Biography",
        "History",
        "Horror",
        "Kids",
        "Learning",
        "Sci-Fi",
      ],
    },
    year: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    favorite: {
      type: Boolean, // тобто улюблена книжка чи не улюблена
      required: false, // тобто поле favorite є необов'язковим (required: false)
      default: false, // тобто якщо не передали поле favorite , то за замовчуванням значення false
      // воно застосується коли поле невизначено коли намагаємося стваорити документ
    },
  },
  {
    versionKey: false,
    timestamps: true, // добавляємо 2 поля createdAt час створення книги , updatedAt час останнього оновлення (для put запиту)
  }
);
// на основі схемки книжки можна створити модель. Викликаємо у mongoose метод model(). Ім'я моделі в однині
export default mongoose.model("Book", bookSchema); // books (назва колекції повинна бути в множині в нижному регістрі)

// на основі схемки створюємо модель. Викликаємо у mongoose метод model(). Ім'я моделі в однині
// export default mongoose.model("Contact", contactSchema); // contacts (назва колекції повинна бути в множині в нижному регістрі)
