// Import required modules and route files
import express from "express";
import dotenv from "dotenv";
import authorRoutes from "./routes/author.routes.js";
import bookRoutes from "./routes/book.routes.js";

// Load environment variables from .env file
dotenv.config();

// Create an Express application instance
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Define main API routes for authors and books
app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);

// Default route to check if the server is running
app.get("/", (req, res) => res.send("Library API with Joi Validation Running..."));

// Export the app instance so it can be used in server.js
export default app;
