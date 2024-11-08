const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config"); // Adjust the import for the connectDB function

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000", // Removed the trailing slash
  credentials: true,
};
app.use(cors(corsOptions));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
