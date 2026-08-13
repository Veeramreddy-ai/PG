import { useEffect, useState } from "react";

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  MenuItem,
  Stack,
  Divider,
  Chip,
  Alert,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BedIcon from "@mui/icons-material/Bed";
import SendIcon from "@mui/icons-material/Send";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

/*
=====================================================
BACKEND URL
=====================================================

Frontend .env:

VITE_API_URL=https://YOUR-RENDER-BACKEND.onrender.com

For local development:

VITE_API_URL=http://localhost:5000
*/

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

/*
=====================================================
WHATSAPP NUMBER
=====================================================
*/

const whatsappNumber = "917095769276";

/*
=====================================================
ROOMS
=====================================================
*/

const roomOptions = [
  {
    title: "AC 1 Sharing",
    type: "AC",
    occupancy: "1 Person",
    price: 21000,
  },
  {
    title: "AC 2 Sharing",
    type: "AC",
    occupancy: "2 Persons",
    price: 10500,
  },
  {
    title: "AC 3 Sharing",
    type: "AC",
    occupancy: "3 Persons",
    price: 8500,
  },
  {
    title: "Non-AC 1 Sharing",
    type: "Non-AC",
    occupancy: "1 Person",
    price: 18000,
  },
  {
    title: "Non-AC 2 Sharing",
    type: "Non-AC",
    occupancy: "2 Persons",
    price: 9000,
  },
  {
    title: "Non-AC 3 Sharing",
    type: "Non-AC",
    occupancy: "3 Persons",
    price: 7000,
  },
];

const PreBooking = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    room: "",
    date: "",
    duration: "1 Month",
    message: "",
  });

  /*
  =====================================================
  ROOM SELECTION FROM ROOMS SECTION
  =====================================================
  */

  useEffect(() => {
    const handleRoomSelection = (event) => {
      const room = event.detail;

      if (!room) return;

      setSelectedRoom(room);

      setFormData((prev) => ({
        ...prev,
        room: room.title || "",
      }));

      setSuccessMessage("");
      setErrorMessage("");
    };

    window.addEventListener(
      "selectRoom",
      handleRoomSelection
    );

    return () => {
      window.removeEventListener(
        "selectRoom",
        handleRoomSelection
      );
    };
  }, []);

  /*
  =====================================================
  INPUT CHANGE
  =====================================================
  */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  /*
  =====================================================
  ROOM CHANGE
  =====================================================
  */

  const handleRoomChange = (event) => {
    const roomTitle = event.target.value;

    const room = roomOptions.find(
      (item) => item.title === roomTitle
    );

    setFormData((prev) => ({
      ...prev,
      room: roomTitle,
    }));

    setSelectedRoom(room || null);

    setSuccessMessage("");
    setErrorMessage("");
  };

  /*
  =====================================================
  PHONE VALIDATION
  =====================================================
  */

  const isValidPhone = (phone) => {
    return /^[6-9]\d{9}$/.test(phone);
  };

  /*
  =====================================================
  WHATSAPP MESSAGE
  =====================================================
  */

  const createWhatsAppMessage = () => {
    const room =
      selectedRoom ||
      roomOptions.find(
        (item) => item.title === formData.room
      );

    const rent = room
      ? `₹${room.price.toLocaleString("en-IN")}/month`
      : "To be confirmed";

    const message = `
Hello Skyline PG,

I would like to enquire about booking a room.

Name: ${formData.name || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Email: ${formData.email || "Not provided"}

Room: ${formData.room || "Not selected"}
Monthly Rent: ${rent}

Move-in Date: ${
      formData.date || "Not selected"
    }

Stay Duration: ${formData.duration}

Requirement:
${formData.message || "None"}

Please let me know about room availability and booking confirmation.
    `.trim();

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  /*
  =====================================================
  PRE-BOOKING SUBMIT
  =====================================================
  */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    /*
    -----------------------------
    BASIC VALIDATION
    -----------------------------
    */

    if (!formData.name.trim()) {
      setErrorMessage(
        "Please enter your full name."
      );
      return;
    }

    if (!isValidPhone(formData.phone)) {
      setErrorMessage(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (!formData.room) {
      setErrorMessage(
        "Please select a preferred room."
      );
      return;
    }

    if (!formData.date) {
      setErrorMessage(
        "Please select your move-in date."
      );
      return;
    }

    /*
    -----------------------------
    PREVENT PAST DATE
    -----------------------------
    */

    if (dayjs(formData.date).isBefore(dayjs(), "day")) {
      setErrorMessage(
        "Move-in date cannot be in the past."
      );
      return;
    }

    /*
    -----------------------------
    SUBMIT
    -----------------------------
    */

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/bookings`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            room: formData.room,
            date: formData.date,
            duration: formData.duration,
            message: formData.message.trim(),
          }),
        }
      );

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to send booking enquiry."
        );
      }

      /*
      -----------------------------
      SUCCESS
      -----------------------------
      */

      setSuccessMessage(
        "Your pre-booking request has been sent successfully. Our team will contact you soon."
      );

      /*
      -----------------------------
      RESET
      -----------------------------
      */

      setFormData({
        name: "",
        phone: "",
        email: "",
        room: "",
        date: "",
        duration: "1 Month",
        message: "",
      });

      setSelectedRoom(null);

      /*
      -----------------------------
      SCROLL TO SUCCESS
      -----------------------------
      */

      window.scrollTo({
        top:
          document.getElementById("booking")
            ?.offsetTop - 80 || 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(
        "Pre-booking error:",
        error
      );

      setErrorMessage(
        error.message ||
          "Unable to send booking request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /*
  =====================================================
  UI
  =====================================================
  */

  return (
    <Box
      id="booking"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      <Container maxWidth="lg">

        {/* ==========================================
            HEADER
        ========================================== */}

        <Box
          sx={{
            maxWidth: 760,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Typography
            sx={{
              color: "#1565C0",
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: "0.8rem",
            }}
          >
            PRE-BOOKING
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              fontWeight: 900,
              color: "#0f172a",
              fontSize: {
                xs: "2rem",
                sm: "2.6rem",
                md: "3.2rem",
              },
              lineHeight: 1.15,
            }}
          >
            Reserve Your Room

            <Box
              component="span"
              sx={{
                display: "block",
                color: "#1565C0",
              }}
            >
              At Skyline PG
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#64748b",
              lineHeight: 1.8,
              fontSize: {
                xs: "0.95rem",
                md: "1rem",
              },
            }}
          >
            Choose your preferred room, provide your
            details and send a pre-booking enquiry.
            Our team will contact you to confirm
            availability.
          </Typography>
        </Box>

        {/* ==========================================
            SUCCESS / ERROR
        ========================================== */}

        {successMessage && (
          <Alert
            severity="success"
            icon={<CheckCircleIcon />}
            sx={{
              maxWidth: 1000,
              mx: "auto",
              mb: 3,
              borderRadius: 2.5,
              fontWeight: 600,
            }}
          >
            {successMessage}
          </Alert>
        )}

        {errorMessage && (
          <Alert
            severity="error"
            sx={{
              maxWidth: 1000,
              mx: "auto",
              mb: 3,
              borderRadius: 2.5,
              fontWeight: 600,
            }}
          >
            {errorMessage}
          </Alert>
        )}

        {/* ==========================================
            BOOKING CARD
        ========================================== */}

        <Paper
          elevation={0}
          sx={{
            maxWidth: 1000,
            mx: "auto",
            p: {
              xs: 2.5,
              sm: 4,
              md: 5,
            },
            borderRadius: 4,
            border: "1px solid #e2e8f0",
            background: "#ffffff",
            boxShadow:
              "0 20px 50px rgba(15,23,42,.08)",
          }}
        >

          {/* ==========================================
              SELECTED ROOM
          ========================================== */}

          {selectedRoom && (
            <Box
              sx={{
                mb: 4,
                p: {
                  xs: 2,
                  sm: 2.5,
                },
                borderRadius: 3,
                background:
                  "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
                border:
                  "1px solid #dbeafe",
              }}
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
              >

                {/* ROOM */}

                <Grid
                  size={{
                    xs: 12,
                    md: 7,
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        minWidth: 48,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#ffffff",
                        color: "#1565C0",
                      }}
                    >
                      <BedIcon />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          color: "#64748b",
                          letterSpacing: 0.6,
                        }}
                      >
                        SELECTED ROOM
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.2,
                          fontWeight: 900,
                          color: "#0f172a",
                          fontSize: "1.05rem",
                        }}
                      >
                        {selectedRoom.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.3,
                          color: "#64748b",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                        }}
                      >
                        {selectedRoom.occupancy}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

                {/* PRICE */}

                <Grid
                  size={{
                    xs: 12,
                    md: 5,
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2.5,
                      background: "#ffffff",
                      border:
                        "1px solid #dbeafe",
                      textAlign: {
                        xs: "left",
                        md: "right",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        color: "#64748b",
                        fontWeight: 800,
                        letterSpacing: 0.5,
                      }}
                    >
                      MONTHLY RENT
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.2,
                        color: "#1565C0",
                        fontSize: {
                          xs: "1.35rem",
                          md: "1.5rem",
                        },
                        fontWeight: 900,
                      }}
                    >
                      ₹
                      {selectedRoom.price.toLocaleString(
                        "en-IN"
                      )}

                      <Typography
                        component="span"
                        sx={{
                          ml: 0.5,
                          color: "#64748b",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                        }}
                      >
                        / month
                      </Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}

          {/* ==========================================
              FORM
          ========================================== */}

          <LocalizationProvider
            dateAdapter={AdapterDayjs}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
            >
              <Grid container spacing={2.5}>

                {/* NAME */}

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    required
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    InputProps={{
                      startAdornment: (
                        <PersonIcon
                          sx={{
                            mr: 1,
                            color: "#1565C0",
                          }}
                        />
                      ),
                    }}
                  />
                </Grid>

                {/* PHONE */}

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    required
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    inputProps={{
                      maxLength: 10,
                      inputMode: "numeric",
                    }}
                    InputProps={{
                      startAdornment: (
                        <PhoneIcon
                          sx={{
                            mr: 1,
                            color: "#1565C0",
                          }}
                        />
                      ),
                    }}
                  />
                </Grid>

                {/* EMAIL */}

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    InputProps={{
                      startAdornment: (
                        <EmailIcon
                          sx={{
                            mr: 1,
                            color: "#1565C0",
                          }}
                        />
                      ),
                    }}
                  />
                </Grid>

                {/* ROOM */}

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    required
                    select
                    label="Preferred Room"
                    name="room"
                    value={formData.room}
                    onChange={handleRoomChange}
                    InputProps={{
                      startAdornment: (
                        <BedIcon
                          sx={{
                            mr: 1,
                            color: "#1565C0",
                          }}
                        />
                      ),
                    }}
                  >
                    {roomOptions.map((room) => (
                      <MenuItem
                        key={room.title}
                        value={room.title}
                      >
                        {room.title} — ₹
                        {room.price.toLocaleString(
                          "en-IN"
                        )}
                        /month
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* MOVE-IN DATE */}

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <DatePicker
                    label="Move-in Date"
                    format="DD/MM/YYYY"
                    minDate={dayjs()}
                    value={
                      formData.date
                        ? dayjs(formData.date)
                        : null
                    }
                    onChange={(newValue) => {
                      setFormData((prev) => ({
                        ...prev,
                        date: newValue
                          ? newValue.format(
                              "YYYY-MM-DD"
                            )
                          : "",
                      }));

                      setSuccessMessage("");
                      setErrorMessage("");
                    }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        required: true,
                        InputProps: {
                          startAdornment: (
                            <CalendarMonthIcon
                              sx={{
                                mr: 1,
                                color: "#1565C0",
                              }}
                            />
                          ),
                        },
                      },
                    }}
                  />
                </Grid>

                {/* DURATION */}

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    required
                    select
                    label="Stay Duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <AccessTimeIcon
                          sx={{
                            mr: 1,
                            color: "#1565C0",
                          }}
                        />
                      ),
                    }}
                  >
                    <MenuItem value="1 Month">
                      1 Month
                    </MenuItem>

                    <MenuItem value="3 Months">
                      3 Months
                    </MenuItem>

                    <MenuItem value="6 Months">
                      6 Months
                    </MenuItem>

                    <MenuItem value="12 Months">
                      12 Months
                    </MenuItem>

                    <MenuItem value="Long Term">
                      Long Term
                    </MenuItem>
                  </TextField>
                </Grid>

                {/* MESSAGE */}

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Message / Requirement"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    placeholder="Any special requirement or question?"
                  />
                </Grid>

                {/* PRICE SUMMARY */}

                {selectedRoom && (
                  <Grid size={{ xs: 12 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2.5,
                        background: "#f8fafc",
                        border:
                          "1px solid #e2e8f0",
                      }}
                    >
                      <Stack
                        direction={{
                          xs: "column",
                          sm: "row",
                        }}
                        spacing={1}
                        justifyContent="space-between"
                        alignItems={{
                          xs: "flex-start",
                          sm: "center",
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                        >
                          <CurrencyRupeeIcon
                            sx={{
                              color: "#1565C0",
                            }}
                          />

                          <Box>
                            <Typography
                              sx={{
                                fontSize:
                                  "0.72rem",
                                color:
                                  "#64748b",
                                fontWeight: 800,
                              }}
                            >
                              MONTHLY RENT
                            </Typography>

                            <Typography
                              sx={{
                                fontWeight: 900,
                                color:
                                  "#0f172a",
                              }}
                            >
                              ₹
                              {selectedRoom.price.toLocaleString(
                                "en-IN"
                              )}
                            </Typography>
                          </Box>
                        </Stack>

                        <Chip
                          icon={
                            <CheckCircleIcon />
                          }
                          label={`${selectedRoom.type} • ${selectedRoom.occupancy}`}
                          sx={{
                            background:
                              "#eff6ff",
                            color: "#1565C0",
                            fontWeight: 800,
                            "& .MuiChip-icon": {
                              color: "#16a34a",
                            },
                          }}
                        />
                      </Stack>
                    </Box>
                  </Grid>
                )}

                <Grid size={{ xs: 12 }}>
                  <Divider sx={{ my: 0.5 }} />
                </Grid>

                {/* ======================================
                    PRE-BOOKING
                ====================================== */}

                <Grid
                  size={{
                    xs: 12,
                    md: 7,
                  }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={loading}
                    endIcon={
                      loading ? null : (
                        <SendIcon />
                      )
                    }
                    sx={{
                      py: 1.5,
                      borderRadius: 2.5,
                      textTransform: "none",
                      fontWeight: 800,
                      fontSize: "1rem",
                      background: "#1565C0",

                      "&:hover": {
                        background: "#0D47A1",
                      },
                    }}
                  >
                    {loading
                      ? "Sending..."
                      : "Send Pre-Booking Request"}
                  </Button>
                </Grid>

                {/* ======================================
                    WHATSAPP
                ====================================== */}

                <Grid
                  size={{
                    xs: 12,
                    md: 5,
                  }}
                >
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    href={createWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      py: 1.5,
                      borderRadius: 2.5,
                      textTransform: "none",
                      fontWeight: 800,
                      fontSize: "1rem",
                      color: "#16a34a",
                      borderColor: "#16a34a",

                      "&:hover": {
                        borderColor: "#15803d",
                        background: "#f0fdf4",
                      },
                    }}
                  >
                    WhatsApp Booking
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </LocalizationProvider>
        </Paper>

        {/* ==========================================
            NOTE
        ========================================== */}

        <Typography
          sx={{
            mt: 2.5,
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "0.8rem",
          }}
        >
          Pre-booking is an enquiry only. Room
          availability will be confirmed by our team.
        </Typography>
      </Container>
    </Box>
  );
};

export default PreBooking;