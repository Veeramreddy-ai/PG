import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
  Stack,
  IconButton,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  const whatsappNumber = "917095769276";

  const mapQuery = encodeURIComponent(
    "Skyline Luxury Men's PG, TCS Adibatla, Plot No. 101, Hyderabad, Bongloor, Telangana 501510"
  );

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll to top
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "#0f172a",
        color: "#ffffff",
      }}
    >
      <Container maxWidth="lg">

        {/* ================= MAIN FOOTER ================= */}

        <Box
          sx={{
            py: { xs: 6, md: 8 },
          }}
        >
          <Grid container spacing={{ xs: 5, md: 8 }}>

            {/* ================= BRAND ================= */}

            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    md: "1.8rem",
                  },
                  fontWeight: 900,
                  color: "#ffffff",
                  mb: 1,
                }}
              >
                Skyline
                <Box
                  component="span"
                  sx={{
                    color: "#42a5f5",
                    ml: 0.6,
                  }}
                >
                  PG
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Skyline Luxury Men's PG
              </Typography>

              <Typography
                sx={{
                  maxWidth: 430,
                  color: "#94a3b8",
                  lineHeight: 1.8,
                  fontSize: "0.92rem",
                }}
              >
                A comfortable, clean and secure place to
                stay near TCS Adibatla. Designed for
                students and working professionals.
              </Typography>

              {/* ================= ACTION BUTTONS ================= */}

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={1.5}
                sx={{
                  mt: 3,
                  alignItems: {
                    xs: "stretch",
                    sm: "center",
                  },
                }}
              >

                {/* WHATSAPP */}

                <Button
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  endIcon={<ArrowForwardIcon />}
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 2.3,
                    py: 1.2,
                    borderRadius: 2.5,
                    background: "#16a34a",
                    textTransform: "none",
                    fontWeight: 800,
                    boxShadow: "none",

                    "&:hover": {
                      background: "#15803d",
                      boxShadow: "none",
                    },
                  }}
                >
                  Chat on WhatsApp
                </Button>

                {/* CALL */}

                <Button
                  variant="outlined"
                  startIcon={<PhoneIcon />}
                  href="tel:+917095769276"
                  sx={{
                    px: 2.3,
                    py: 1.2,
                    borderRadius: 2.5,
                    color: "#ffffff",
                    borderColor: "#475569",
                    textTransform: "none",
                    fontWeight: 800,

                    "&:hover": {
                      borderColor: "#42a5f5",
                      background: "rgba(66,165,245,0.08)",
                    },
                  }}
                >
                  Call Now
                </Button>

              </Stack>
            </Grid>

            {/* ================= QUICK LINKS ================= */}

            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  mb: 2.5,
                }}
              >
                Quick Links
              </Typography>

              <Stack spacing={1.5}>
                {[
                  ["Home", "home"],
                  ["About", "about"],
                  ["Amenities", "amenities"],
                  ["Rooms", "rooms"],
                  ["Contact", "contact"],
                ].map(([label, id]) => (
                  <Typography
                    key={id}
                    component="button"
                    onClick={() => handleScroll(id)}
                    sx={{
                      width: "fit-content",
                      border: 0,
                      background: "transparent",
                      padding: 0,
                      cursor: "pointer",
                      color: "#94a3b8",
                      fontSize: "0.9rem",
                      textAlign: "left",
                      fontFamily: "inherit",
                      transition: "color .2s ease",

                      "&:hover": {
                        color: "#42a5f5",
                      },
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Stack>
            </Grid>

            {/* ================= CONTACT ================= */}

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  mb: 2.5,
                }}
              >
                Contact Us
              </Typography>

              <Stack spacing={2.2}>

                {/* PHONE */}

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-start",
                  }}
                >
                  <PhoneIcon
                    sx={{
                      color: "#42a5f5",
                      fontSize: 20,
                      mt: 0.2,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        color: "#64748b",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: 0.5,
                        mb: 0.3,
                      }}
                    >
                      PHONE
                    </Typography>

                    <Typography
                      component="a"
                      href="tel:+917095769276"
                      sx={{
                        color: "#cbd5e1",
                        textDecoration: "none",
                        fontSize: "0.9rem",

                        "&:hover": {
                          color: "#42a5f5",
                        },
                      }}
                    >
                      +91 70957 69276
                    </Typography>
                  </Box>
                </Box>

                {/* EMAIL */}

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-start",
                  }}
                >
                  <EmailIcon
                    sx={{
                      color: "#42a5f5",
                      fontSize: 20,
                      mt: 0.2,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        color: "#64748b",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: 0.5,
                        mb: 0.3,
                      }}
                    >
                      EMAIL
                    </Typography>

                    <Typography
                      component="a"
                      href="mailto:skylinepgstay@gmail.com"
                      sx={{
                        color: "#cbd5e1",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        wordBreak: "break-word",

                        "&:hover": {
                          color: "#42a5f5",
                        },
                      }}
                    >
                      skylinepgstay@gmail.com
                    </Typography>
                  </Box>
                </Box>

                {/* LOCATION */}

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-start",
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      color: "#42a5f5",
                      fontSize: 20,
                      mt: 0.2,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        color: "#64748b",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: 0.5,
                        mb: 0.3,
                      }}
                    >
                      LOCATION
                    </Typography>

                    <Typography
                      sx={{
                        color: "#cbd5e1",
                        fontSize: "0.88rem",
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
                      size="small"
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        mt: 0.8,
                        px: 0,
                        color: "#42a5f5",
                        textTransform: "none",
                        fontWeight: 800,

                        "&:hover": {
                          background: "transparent",
                          color: "#90caf9",
                        },
                      }}
                    >
                      View Location
                    </Button>
                  </Box>
                </Box>

              </Stack>
            </Grid>

          </Grid>
        </Box>

        {/* ================= DIVIDER ================= */}

        <Divider
          sx={{
            borderColor: "#1e293b",
          }}
        />

        {/* ================= BOTTOM ================= */}

        <Box
          sx={{
            py: 2.5,
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >

          <Typography
            sx={{
              color: "#64748b",
              fontSize: "0.8rem",
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            © {new Date().getFullYear()} Skyline Luxury
            Men's PG. All rights reserved.
          </Typography>

          <Typography
            sx={{
              color: "#475569",
              fontSize: "0.78rem",
              textAlign: "center",
            }}
          >
            Comfort • Cleanliness • Security
          </Typography>

          {/* ================= SCROLL TOP ================= */}

          <IconButton
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            sx={{
              width: 40,
              height: 40,
              color: "#ffffff",
              background: "#1565C0",
              borderRadius: 2,

              "&:hover": {
                background: "#0D47A1",
                transform: "translateY(-2px)",
              },

              transition: "all .2s ease",
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>

        </Box>

      </Container>
    </Box>
  );
};

export default Footer;