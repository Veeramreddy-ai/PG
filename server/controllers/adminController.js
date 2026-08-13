const jwt = require("jsonwebtoken");

const adminLogin = async (req, res) => {
  try {
    console.log("📥 Login body:", req.body);

    // Accept both formats temporarily
    const username = req.body.username || req.body.email;
    const password = req.body.password || req.body.pwd;

    console.log("🔐 Checking:", {
      username,
      passwordProvided: !!password,
    });

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });
    }

    console.log("ENV username:", process.env.ADMIN_USERNAME);
    console.log(
      "ENV password exists:",
      !!process.env.ADMIN_PASSWORD
    );

    if (
      username !== process.env.ADMIN_USERNAME ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      console.log("❌ Admin credentials do not match");

      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        success: false,
        message: "JWT_SECRET is missing in .env",
      });
    }

    const token = jwt.sign(
      {
        username: process.env.ADMIN_USERNAME,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    console.log("✅ ADMIN LOGIN SUCCESS");

    return res.status(200).json({
      success: true,
      message: "Admin login successful.",
      token,
      admin: {
        username: process.env.ADMIN_USERNAME,
        role: "admin",
      },
    });
  } catch (error) {
    console.error("❌ Admin login error:", error);

    return res.status(500).json({
      success: false,
      message: "Admin login failed.",
    });
  }
};

module.exports = {
  adminLogin,
};