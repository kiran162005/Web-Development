const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory array to store books
let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// =====================
// GET - Get all books
// =====================
app.get("/books", (req, res) => {
  res.json(books);
});

// =====================
// POST - Add new book
// =====================
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Title and Author required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

// =====================
// PUT - Update book
// =====================
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// =====================
// DELETE - Remove book
// =====================
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deletedBook = books.splice(index, 1);

  res.json(deletedBook);
});

// =====================
// Start Server
// =====================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
