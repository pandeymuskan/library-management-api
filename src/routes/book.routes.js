// Import express and required modules
import express from "express";
import {
  createBook,
  getBooks,
  searchByAuthor,
  updateBook,
  deleteBook
} from "../controllers/book.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { bookSchema } from "../validations/book.validation.js";

// Create a new router instance for all book-related routes
const router = express.Router();

// Route to create a new book (with Joi validation)
router.post("/", validate(bookSchema), createBook);

// Route to get all books (supports pagination)
router.get("/", getBooks);

// Route to search books by author name
router.get("/search", searchByAuthor);

// Route to update book details using book ID (with Joi validation)
router.put("/:id", validate(bookSchema), updateBook);

// Route to delete a book using its ID
router.delete("/:id", deleteBook);

// Export the router to be used in app.js
export default router;
