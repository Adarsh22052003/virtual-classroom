const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Debugging line to check if MONGO_URI is loaded
// console.log("MongoDB URI:", process.env.MONGO_URI);

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/classes", require("./routes/classes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
