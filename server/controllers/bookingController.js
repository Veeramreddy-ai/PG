const nodemailer = require("nodemailer");
const Booking = require("../models/Booking");

// =====================================================
// DELETE BOOKING
// =====================================================

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("🗑️ Delete booking:", id);

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    await Booking.findByIdAndDelete(id);

    console.log("✅ Booking permanently deleted:", id);

    return res.status(200).json({
      success: true,
      message: "Booking deleted successfully.",
      bookingId: id,
    });
  } catch (error) {
    console.error(
      "❌ Delete booking error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to delete booking.",
    });
  }
};

// =====================================================
// SEND BOOKING ENQUIRY
// =====================================================

const sendBookingEnquiry = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      room,
      date,
      duration,
      message,
    } = req.body;

    if (!name || !phone || !room || !date) {
      return res.status(400).json({
        success: false,
        message:
          "Name, phone, room and move-in date are required.",
      });
    }

    const booking = await Booking.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email
        ? email.trim().toLowerCase()
        : "",
      room: room.trim(),
      date,
      duration: duration || "",
      message: message
        ? message.trim()
        : "",
      status: "pending",
    });

    console.log(
      "✅ Booking saved:",
      booking._id
    );

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from: `"Skyline PG Website" <${process.env.EMAIL_USER}>`,

      to:
        process.env.ADMIN_EMAIL ||
        process.env.EMAIL_USER,

      replyTo:
        email || process.env.EMAIL_USER,

      subject:
        `New Pre-Booking Enquiry - ${room}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: auto;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        ">

          <div style="
            background: #1565C0;
            color: white;
            padding: 24px;
          ">
            <h2 style="margin:0;">
              Skyline PG
            </h2>

            <p style="margin:8px 0 0;">
              New Pre-Booking Request
            </p>
          </div>

          <div style="padding:24px;">

            <h3>Customer Details</h3>

            <table style="
              width:100%;
              border-collapse:collapse;
            ">

              <tr>
                <td style="padding:10px 0;color:#64748b;">
                  Name
                </td>

                <td style="padding:10px 0;font-weight:bold;">
                  ${name}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#64748b;">
                  Phone
                </td>

                <td style="padding:10px 0;font-weight:bold;">
                  ${phone}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#64748b;">
                  Email
                </td>

                <td style="padding:10px 0;font-weight:bold;">
                  ${email || "Not provided"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#64748b;">
                  Room
                </td>

                <td style="
                  padding:10px 0;
                  font-weight:bold;
                  color:#1565C0;
                ">
                  ${room}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#64748b;">
                  Move-in Date
                </td>

                <td style="padding:10px 0;font-weight:bold;">
                  ${date}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#64748b;">
                  Stay Duration
                </td>

                <td style="padding:10px 0;font-weight:bold;">
                  ${duration || "Not specified"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;color:#64748b;">
                  Booking ID
                </td>

                <td style="padding:10px 0;font-weight:bold;">
                  ${booking._id}
                </td>
              </tr>

            </table>

            <hr style="
              border:none;
              border-top:1px solid #e2e8f0;
              margin:24px 0;
            "/>

            <h3>Message / Requirement</h3>

            <p style="
              color:#475569;
              line-height:1.7;
              white-space:pre-line;
            ">
              ${message || "No additional requirement"}
            </p>

          </div>

          <div style="
            background:#f8fafc;
            padding:16px 24px;
            color:#64748b;
            font-size:13px;
          ">
            This enquiry was submitted from the Skyline PG website.
          </div>

        </div>
      `,
    });

    console.log("✅ Booking email sent");

    return res.status(200).json({
      success: true,
      message:
        "Booking enquiry sent and saved successfully.",
      bookingId: booking._id,
    });
  } catch (error) {
    console.error(
      "❌ Booking error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to process booking enquiry.",
      error: error.message,
    });
  }
};

// =====================================================
// GET ALL BOOKINGS
// =====================================================

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error(
      "❌ Get bookings error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Unable to fetch bookings.",
    });
  }
};

// =====================================================
// UPDATE BOOKING STATUS
// =====================================================

// =====================================================
// UPDATE BOOKING STATUS + SEND CUSTOMER EMAIL
// =====================================================

// =====================================================
// UPDATE BOOKING STATUS + SEND EMAIL
// =====================================================

const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    console.log(
      "📌 Booking status update:",
      id,
      "=>",
      status
    );

    // =========================
    // VALIDATE STATUS
    // =========================

    const allowedStatuses = [
      "pending",
      "confirmed",
      "cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking status.",
      });
    }

    // =========================
    // FIND BOOKING
    // =========================

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    // =========================
    // SAVE STATUS
    // =========================

    booking.status = status;

    await booking.save();

    console.log(
      "✅ Booking status saved:",
      booking._id,
      booking.status
    );

    // =========================
    // EMAIL TRANSPORTER
    // =========================

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================
    // EMAIL CONTENT
    // =========================

    let subject = "";
    let title = "";
    let messageText = "";
    let statusText = "";

    if (status === "confirmed") {
      subject = `Booking Confirmed - Skyline PG`;
      title = "Booking Confirmed";
      statusText = "CONFIRMED";

      messageText =
        "Your booking request has been confirmed by Skyline PG. We look forward to welcoming you.";
    }

    if (status === "cancelled") {
      subject = `Booking Cancelled - Skyline PG`;
      title = "Booking Cancelled";
      statusText = "CANCELLED";

      messageText =
        "Your booking request has been cancelled by Skyline PG. If you have any questions, please contact us.";
    }

    // Pending ki email pampakunda only confirmed/cancelled
    if (
      status === "confirmed" ||
      status === "cancelled"
    ) {
      // =========================
      // CHECK CUSTOMER EMAIL
      // =========================

      if (booking.email) {
        await transporter.sendMail({
          from: `"Skyline PG" <${process.env.EMAIL_USER}>`,

          to: booking.email,

          replyTo: process.env.EMAIL_USER,

          subject,

          html: `
            <div
              style="
                font-family: Arial, sans-serif;
                background: #f8fafc;
                padding: 30px 15px;
              "
            >

              <div
                style="
                  max-width: 650px;
                  margin: auto;
                  background: white;
                  border-radius: 16px;
                  overflow: hidden;
                  border: 1px solid #e2e8f0;
                "
              >

                <!-- HEADER -->

                <div
                  style="
                    background: #1565C0;
                    color: white;
                    padding: 28px;
                  "
                >
                  <h2
                    style="
                      margin: 0;
                      font-size: 24px;
                    "
                  >
                    Skyline PG
                  </h2>

                  <p
                    style="
                      margin: 8px 0 0;
                      opacity: 0.9;
                    "
                  >
                    Booking Update
                  </p>
                </div>

                <!-- CONTENT -->

                <div style="padding: 30px;">

                  <h2
                    style="
                      margin-top: 0;
                      color: #0f172a;
                    "
                  >
                    ${title}
                  </h2>

                  <p
                    style="
                      color: #475569;
                      font-size: 16px;
                      line-height: 1.7;
                    "
                  >
                    Hi ${booking.name},
                  </p>

                  <p
                    style="
                      color: #475569;
                      font-size: 16px;
                      line-height: 1.7;
                    "
                  >
                    ${messageText}
                  </p>

                  <!-- STATUS -->

                  <div
                    style="
                      margin: 25px 0;
                      padding: 18px;
                      border-radius: 10px;
                      background: ${
                        status === "confirmed"
                          ? "#dcfce7"
                          : "#fee2e2"
                      };
                      text-align: center;
                    "
                  >
                    <strong
                      style="
                        color: ${
                          status === "confirmed"
                            ? "#15803d"
                            : "#dc2626"
                        };
                        font-size: 18px;
                      "
                    >
                      ${statusText}
                    </strong>
                  </div>

                  <!-- BOOKING DETAILS -->

                  <h3
                    style="
                      color: #0f172a;
                      margin-bottom: 15px;
                    "
                  >
                    Booking Details
                  </h3>

                  <table
                    style="
                      width: 100%;
                      border-collapse: collapse;
                    "
                  >

                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          color: #64748b;
                        "
                      >
                        Name
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          font-weight: bold;
                        "
                      >
                        ${booking.name}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          color: #64748b;
                        "
                      >
                        Phone
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          font-weight: bold;
                        "
                      >
                        ${booking.phone}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          color: #64748b;
                        "
                      >
                        Room
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          font-weight: bold;
                          color: #1565C0;
                        "
                      >
                        ${booking.room}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          color: #64748b;
                        "
                      >
                        Move-in Date
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          font-weight: bold;
                        "
                      >
                        ${booking.date}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          color: #64748b;
                        "
                      >
                        Duration
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          font-weight: bold;
                        "
                      >
                        ${
                          booking.duration ||
                          "Not specified"
                        }
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          color: #64748b;
                        "
                      >
                        Booking ID
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          font-weight: bold;
                          font-size: 12px;
                        "
                      >
                        ${booking._id}
                      </td>
                    </tr>

                  </table>

                  ${
                    status === "confirmed"
                      ? `
                        <div
                          style="
                            margin-top: 25px;
                            padding: 18px;
                            background: #eff6ff;
                            border-radius: 10px;
                            color: #1e40af;
                          "
                        >
                          <strong>
                            Important:
                          </strong>

                          Please keep this email
                          for your reference.
                        </div>
                      `
                      : `
                        <div
                          style="
                            margin-top: 25px;
                            padding: 18px;
                            background: #fef2f2;
                            border-radius: 10px;
                            color: #991b1b;
                          "
                        >
                          If you believe this
                          cancellation was made in
                          error, please contact
                          Skyline PG.
                        </div>
                      `
                  }

                </div>

                <!-- FOOTER -->

                <div
                  style="
                    background: #f8fafc;
                    padding: 20px 30px;
                    color: #64748b;
                    font-size: 13px;
                    text-align: center;
                  "
                >
                  Skyline PG<br />
                  Thank you for choosing us.
                </div>

              </div>

            </div>
          `,
        });

        console.log(
          `📧 ${status} email sent to:`,
          booking.email
        );
      } else {
        console.log(
          "⚠️ Customer has no email. Email skipped."
        );
      }
    }

    // =========================
    // RESPONSE
    // =========================

    return res.status(200).json({
      success: true,

      message:
        status === "confirmed"
          ? "Booking confirmed and email sent successfully."
          : status === "cancelled"
          ? "Booking cancelled and email sent successfully."
          : "Booking status updated successfully.",

      booking,
    });
  } catch (error) {
    console.error(
      "❌ Update booking status error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to update booking status.",
      error: error.message,
    });
  }
};



// =====================================================
// EXPORT
// =====================================================

module.exports = {
  sendBookingEnquiry,
  getBookings,
  updateBookingStatus,
  deleteBooking,
};