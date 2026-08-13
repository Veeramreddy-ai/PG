const express = require("express");

const {
  adminLogin,
} = require("../controllers/adminController");

const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// ==========================================
// PUBLIC LOGIN
// ==========================================

router.post("/login", adminLogin);

// ==========================================
// PROTECTED VERIFY
// ==========================================

router.get(
  "/verify",
  protectAdmin,
  (req, res) => {
    return res.status(200).json({
      success: true,
      message: "Admin authentication verified.",
      admin: req.admin,
    });
  }
);

module.exports = router;