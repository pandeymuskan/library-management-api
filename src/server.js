// Import the database connection function and the Express app
import { connectDB } from "./config/db.js";
import app from "./app.js";

// Define the server port (from .env or default to 5000)
const PORT = process.env.PORT || 5000;

// Connect to MongoDB before starting the server
connectDB();

// Start the Express server and listen on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
