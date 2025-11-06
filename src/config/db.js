// Import the mongoose library to connect and interact with MongoDB
import mongoose from "mongoose";

/**
 * Connects to the MongoDB database using the connection string (URI)
 * defined in the environment variable MONGO_URI.
 * 
 * - Uses async/await for asynchronous connection handling.
 * - Logs a success message if the connection is established.
 * - Logs an error and exits the process if connection fails.
 */
export const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using URI from .env file
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,    // ensures compatibility with new URL parser
      useUnifiedTopology: true  // uses the new server discovery and monitoring engine
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    // If connection fails, log the error and stop the server
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit with failure code
  }
};
