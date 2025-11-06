// Import express and other required modules
import express from "express";
import { createAuthor, getAuthors } from "../controllers/author.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { authorSchema } from "../validations/author.validation.js";

// Create a new router instance to define author-related routes
const router = express.Router();

// Route to create a new author
// Before saving, it validates the data using the Joi schema
router.post("/", validate(authorSchema), createAuthor);

// Route to get all authors from the database
router.get("/", getAuthors);

// Export the router so it can be used in app.js
export default router;
