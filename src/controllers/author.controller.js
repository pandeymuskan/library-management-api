// Importing the Author model so we can work with the "authors" collection in our database
import Author from "../models/author.model.js";

/**
 * Function to create a new author
 * This will run when someone sends a POST request to /api/authors
 */
export const createAuthor = async (req, res) => {
  try {
    // The data for the new author comes from the request body (name, bio, birthDate, etc.)
    // Here, we simply use Mongoose's create() method to save that data into MongoDB.
    const author = await Author.create(req.body);

    // If everything goes well, we send back the created author with a 201 status (which means "Created")
    res.status(201).json(author);
  } catch (err) {
    // If something goes wrong (like missing fields or invalid data),
    // we return an error message with a 400 status (which means "Bad Request").
    res.status(400).json({ message: err.message });
  }
};

/**
 * Function to get all authors from the database
 * This will run when someone sends a GET request to /api/authors
 */
export const getAuthors = async (req, res) => {
  try {
    // We use Mongoose's find() method to fetch all authors stored in our database.
    const authors = await Author.find();

    // Once we have the list, we send it back to the client as a JSON response.
    res.json(authors);
  } catch (err) {
    // If there's a problem connecting to the database or fetching data,
    // we send back a 500 status (which means "Internal Server Error").
    res.status(500).json({ message: err.message });
  }
};
