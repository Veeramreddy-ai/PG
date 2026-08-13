require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const nodemailer = require("nodemailer");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");




const bookingRoutes = require("./routes/bookingRoutes");


const app = express();

const PORT = process.env.PORT || 5000;

// =====================================================
// DATABASE
// =====================================================

connectDB();

// =====================================================
// SECURITY
// =====================================================

app.use(helmet());

// =====================================================
// CORS
// =====================================================

app.use(
  cors({
    origin: "*",
    methods: [
      "GET",
      "POST",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

// =====================================================
// BODY PARSER
// =====================================================

app.use(express.json());

// =====================================================
// RATE LIMIT
// =====================================================

const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,

  message: {
    success: false,
    message:
      "Too many booking requests. Please try again later.",
  },
});

// =====================================================
// HEALTH CHECK
// =====================================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Skyline PG server is running",
  });
});

// =====================================================
// EMAIL CHECK
// =====================================================

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error(
      "❌ Email configuration error:",
      error.message
    );
  } else {
    console.log("✅ Email service ready");
  }
});

// =====================================================
// ADMIN ROUTES
// =====================================================

app.use(
  "/api/admin",
  adminRoutes
);

// =====================================================
// BOOKING ROUTES
// =====================================================

app.use(
  "/api/bookings",
  bookingLimiter,
  bookingRoutes
);

// =====================================================
// 404
// =====================================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// =====================================================
// ERROR HANDLER
// =====================================================

app.use(
  (error, req, res, next) => {
    console.error(
      "❌ Server error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
);

// =====================================================
// SERVER
// =====================================================

app.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(
      `🚀 Skyline PG server running on port ${PORT}`
    );
  }
);

