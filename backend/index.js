const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Make sure .env is loaded

const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(
      "Failed to start server due to MongoDB connection error:",
      err
    );
  });
