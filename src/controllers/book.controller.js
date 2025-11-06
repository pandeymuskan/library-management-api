// Importing both Book and Author models so we can work with them in our database
import Book from "../models/book.model.js";
import Author from "../models/author.model.js";

/**
 * Function to create a new book
 * This runs when someone sends a POST request to /api/books
 */
export const createBook = async (req, res) => {
  try {
    // First, we check if the author ID given in the request actually exists.
    // This makes sure the book is linked to a valid author.
    const author = await Author.findById(req.body.author);

    // If the author doesn’t exist, we send a 404 response (meaning “Not Found”)
    if (!author) return res.status(404).json({ message: "Author not found" });

    // If the author exists, we go ahead and create the book using the data provided.
    const book = await Book.create(req.body);

    // Once the book is successfully created, we send it back with a 201 (Created) status.
    res.status(201).json(book);
  } catch (err) {
    // If anything goes wrong (like invalid data), we send a 400 (Bad Request) error.
    res.status(400).json({ message: err.message });
  }
};

/**
 * Function to get all books (with pagination)
 * This runs when someone sends a GET request to /api/books
 */
export const getBooks = async (req, res) => {
  try {
    // We allow pagination so that not all books load at once.
    // If the user doesn't specify page or limit, we default to page=1 and limit=5.
    const { page = 1, limit = 5 } = req.query;

    // We use .populate("author") to include author details along with each book.
    // .limit() controls how many results per page.
    // .skip() helps move to the next set of results.
    const books = await Book.find()
      .populate("author")
      .limit(limit * 1)
      .skip((page - 1) * limit);

    // Send the list of books as a JSON response.
    res.json(books);
  } catch (err) {
    // If something goes wrong (like DB error), return a 500 (Internal Server Error).
    res.status(500).json({ message: err.message });
  }
};

/**
 * Function to search books by author name
 * This runs when someone sends a GET request to /api/books/search?name=AUTHORNAME
 */
export const searchByAuthor = async (req, res) => {
  try {
    // Extract the author's name from the query parameters (?name=AUTHORNAME)
    const { name } = req.query;

    // We look for an author whose name matches (case-insensitive search using RegExp)
    const author = await Author.findOne({ name: new RegExp(name, "i") });

    // If author doesn’t exist, send a 404 (Not Found)
    if (!author) return res.status(404).json({ message: "Author not found" });

    // If we find the author, we then find all books written by them.
    const books = await Book.find({ author: author._id }).populate("author");

    // Send the list of books for that author.
    res.json(books);
  } catch (err) {
    // Catch any server or query errors and send a 500 (Internal Server Error)
    res.status(500).json({ message: err.message });
  }
};

/**
 * Function to update a book by its ID
 * This runs when someone sends a PUT request to /api/books/:id
 */
export const updateBook = async (req, res) => {
  try {
    // We use findByIdAndUpdate() to locate a book and apply the updates.
    // { new: true } ensures we get the updated document back.
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // If no book was found with that ID, we return a 404 (Not Found)
    if (!updated) return res.status(404).json({ message: "Book not found" });

    // If update is successful, send back the updated book.
    res.json(updated);
  } catch (err) {
    // Handle validation or bad data errors with a 400 (Bad Request)
    res.status(400).json({ message: err.message });
  }
};

/**
 * Function to delete a book by its ID
 * This runs when someone sends a DELETE request to /api/books/:id
 */
export const deleteBook = async (req, res) => {
  try {
    // We use findByIdAndDelete() to remove the book from the database.
    const deleted = await Book.findByIdAndDelete(req.params.id);

    // If the book doesn’t exist, send back a 404 response.
    if (!deleted) return res.status(404).json({ message: "Book not found" });

    // If deletion is successful, send a success message.
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    // Handle any unexpected errors with a 500 (Internal Server Error)
    res.status(500).json({ message: err.message });
  }
};
