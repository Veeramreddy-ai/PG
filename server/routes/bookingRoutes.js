const express = require("express");

const {
  sendBookingEnquiry,
  getBookings,
  updateBookingStatus,
  deleteBooking,
} = require("../controllers/bookingController");

const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// ==========================================
// PUBLIC - CREATE BOOKING
// ==========================================

router.post("/", sendBookingEnquiry);

// ==========================================
// ADMIN - GET BOOKINGS
// ==========================================

router.get(
  "/",
  protectAdmin,
  getBookings
);

// ==========================================
// ADMIN - UPDATE STATUS
// ==========================================

router.patch(
  "/:id/status",
  protectAdmin,
  updateBookingStatus
);

// ==========================================
// ADMIN - DELETE
// ==========================================

router.delete(
  "/:id",
  protectAdmin,
  deleteBooking
);

module.exports = router;