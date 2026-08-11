const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Skyline PG server is running",
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is working",
  });
});

// Routes
// app.use("/api/bookings", require("./routes/bookingRoutes"));

app.listen(PORT, () => {
  console.log(`🚀 Skyline PG server running on http://localhost:${PORT}`);
});