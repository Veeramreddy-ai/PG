import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Contact = () => {
  const latitude = 17.234889;
  const longitude = 78.568667;

  const mapQuery = encodeURIComponent(
  "Skyline Luxury Men's PG, TCS Adibatla, Plot No. 101, Hyderabad, Bongloor, Telangana 501510"
);

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  const whatsappNumber = "917095769276";

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    const whatsappMessage = `
Hello Skyline PG,

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Message:
${message}

Please get back to me regarding my enquiry.
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="lg">

        {/* ================= HEADER ================= */}

        <Box
          sx={{
            textAlign: "center",
            maxWidth: 760,
            mx: "auto",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Typography
            sx={{
              color: "#1565C0",
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: "0.85rem",
              mb: 1.5,
            }}
          >
            CONTACT SKYLINE
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: {
                xs: "2.1rem",
                sm: "2.7rem",
                md: "3.3rem",
              },
              lineHeight: 1.15,
              color: "#0f172a",
            }}
          >
            Let's Talk About Your{" "}
            <Box
              component="span"
              sx={{ color: "#1565C0" }}
            >
              Stay
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#64748b",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            Looking for a comfortable and peaceful place to
            stay? Get in touch with Skyline PG for room
            availability and enquiries.
          </Typography>
        </Box>

        {/* ================= MAIN CONTENT ================= */}

        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          alignItems="stretch"
        >

          {/* ================= LEFT CONTACT INFO ================= */}

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                p: {
                  xs: 3,
                  sm: 4,
                  md: 4.5,
                },
                borderRadius: 4,
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow:
                  "0 15px 40px rgba(15,23,42,0.06)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  color: "#0f172a",
                  mb: 4,
                }}
              >
                Contact Information
              </Typography>

              {/* PHONE */}

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    minWidth: 50,
                    borderRadius: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, #eff6ff, #dbeafe)",
                    color: "#1565C0",
                  }}
                >
                  <PhoneIcon />
                </Box>

                <Box>
                  <Typography
                    fontWeight={800}
                    sx={{
                      mb: 0.5,
                      color: "#0f172a",
                    }}
                  >
                    Phone
                  </Typography>

                  <Typography
                    component="a"
                    href="tel:+917095769276"
                    sx={{
                      color: "#64748b",
                      textDecoration: "none",
                      transition: "0.2s",

                      "&:hover": {
                        color: "#1565C0",
                      },
                    }}
                  >
                    +91 70957 69276
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* EMAIL */}

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    minWidth: 50,
                    borderRadius: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, #eff6ff, #dbeafe)",
                    color: "#1565C0",
                  }}
                >
                  <EmailIcon />
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    fontWeight={800}
                    sx={{
                      mb: 0.5,
                      color: "#0f172a",
                    }}
                  >
                    Email
                  </Typography>

                  <Typography
                    component="a"
                    href="mailto:skylinepgstay@gmail.com"
                    sx={{
                      color: "#64748b",
                      textDecoration: "none",
                      wordBreak: "break-word",

                      "&:hover": {
                        color: "#1565C0",
                      },
                    }}
                  >
                    skylinepgstay@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* WHATSAPP */}

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    minWidth: 50,
                    borderRadius: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, #ecfdf5, #dcfce7)",
                    color: "#16a34a",
                  }}
                >
                  <WhatsAppIcon />
                </Box>

                <Box>
                  <Typography
                    fontWeight={800}
                    sx={{
                      mb: 0.5,
                      color: "#0f172a",
                    }}
                  >
                    WhatsApp
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748b",
                      mb: 1.5,
                      lineHeight: 1.6,
                    }}
                  >
                    Quick enquiries & room availability
                  </Typography>

                  <Button
                    variant="outlined"
                    size="small"
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<ArrowOutwardIcon />}
                    sx={{
                      color: "#16a34a",
                      borderColor: "#16a34a",
                      fontWeight: 800,
                      textTransform: "none",
                      borderRadius: 2,

                      "&:hover": {
                        borderColor: "#15803d",
                        background: "#f0fdf4",
                      },
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                </Box>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* LOCATION */}

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    minWidth: 50,
                    borderRadius: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, #eff6ff, #dbeafe)",
                    color: "#1565C0",
                  }}
                >
                  <LocationOnIcon />
                </Box>

                <Box>
                  <Typography
                    fontWeight={800}
                    sx={{
                      mb: 0.5,
                      color: "#0f172a",
                    }}
                  >
                    Skyline PG
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.7,
                    }}
                  >
                    TCS Adibatla, Plot No. 101,
                    <br />
                    Hyderabad, Bongloor,
                    <br />
                    Telangana 501510
                  </Typography>

                  <Button
                    variant="text"
                    size="small"
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<ArrowOutwardIcon />}
                    sx={{
                      mt: 1,
                      px: 0,
                      fontWeight: 800,
                      color: "#1565C0",
                      textTransform: "none",
                    }}
                  >
                    View on Google Maps
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* ================= RIGHT FORM ================= */}

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                p: {
                  xs: 3,
                  sm: 4,
                  md: 4.5,
                },
                borderRadius: 4,
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow:
                  "0 15px 40px rgba(15,23,42,0.06)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  color: "#0f172a",
                  mb: 1,
                }}
              >
                Send an Enquiry
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                Fill in your details and we'll get back to
                you through WhatsApp.
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                }}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Your Name"
                      name="name"
                      fullWidth
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2.5,
                        },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      fullWidth
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2.5,
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2.5,
                    },
                  }}
                />

                <TextField
                  label="Your Message"
                  name="message"
                  multiline
                  rows={5}
                  fullWidth
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2.5,
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    py: 1.6,
                    mt: 1,
                    fontWeight: 800,
                    borderRadius: 2.5,
                    background:
                      "linear-gradient(135deg, #16a34a, #15803d)",
                    textTransform: "none",
                    boxShadow:
                      "0 8px 20px rgba(22,163,74,0.18)",

                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #15803d, #166534)",
                      boxShadow:
                        "0 10px 24px rgba(22,163,74,0.25)",
                    },
                  }}
                >
                  Send Enquiry on WhatsApp
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* ================= MAP ================= */}

        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Paper
            elevation={0}
            sx={{
              overflow: "hidden",
              borderRadius: 4,
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow:
                "0 15px 40px rgba(15,23,42,0.06)",
            }}
          >
            {/* MAP HEADER */}

            <Box
              sx={{
                px: { xs: 3, md: 4 },
                py: { xs: 2.5, md: 3 },
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  borderRadius: 2.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #eff6ff, #dbeafe)",
                  color: "#1565C0",
                }}
              >
                <LocationOnIcon />
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  fontWeight={900}
                  color="#0f172a"
                >
                  Find Skyline PG
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    mt: 0.5,
                    fontSize: "0.92rem",
                  }}
                >
                  View our location directly on Google Maps.
                </Typography>
              </Box>
            </Box>

            {/* MAP */}

            <Box
              sx={{
                width: "100%",
                height: {
                  xs: 300,
                  sm: 380,
                  md: 450,
                },
              }}
            >
              <iframe
                title="Skyline PG Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  display: "block",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Paper>
        </Box>

      </Container>
    </Box>
  );
};

export default Contact;