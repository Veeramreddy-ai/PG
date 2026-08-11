import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BedIcon from "@mui/icons-material/Bed";
import WifiIcon from "@mui/icons-material/Wifi";
import SecurityIcon from "@mui/icons-material/Security";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Hero = () => {
  const handleBooking = () => {
    const section = document.getElementById("booking");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleRooms = () => {
    const section = document.getElementById("rooms");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
<Box
  id="home"
  component="section"
  sx={{
    position: "relative",

    minHeight: {
      xs: "560px",
      sm: "620px",
      md: "680px",
    },

    display: "flex",
    alignItems: "center",

    overflow: "hidden",

    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(15, 23, 42, 0.88) 0%,
        rgba(15, 23, 42, 0.70) 38%,
        rgba(15, 23, 42, 0.38) 70%,
        rgba(15, 23, 42, 0.18) 100%
      ),
      url("/images/rooms/hero/skyline-hero.png")
    `,

    backgroundSize: "cover",

    backgroundPosition: {
      xs: "center bottom",
      sm: "center bottom",
      md: "center bottom",
    },

    backgroundRepeat: "no-repeat",
  }}
>
      {/* ================= EXTRA OVERLAY ================= */}

      <Box
  sx={{
    position: "absolute",
    inset: 0,

    background:
      "linear-gradient(180deg, rgba(15,23,42,0.05) 0%, rgba(15,23,42,0.22) 100%)",

    pointerEvents: "none",
  }}
/>

      {/* ================= CONTENT ================= */}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,

          py: {
  xs: 7,
  sm: 8,
  md: 9,
},
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: 650,
              md: 700,
            },
          }}
        >
          {/* ================= LABEL ================= */}

          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,

              px: 2,
              py: 0.9,

              mb: 2.5,

              borderRadius: 20,

              background:
                "rgba(255,255,255,.10)",

              border:
                "1px solid rgba(255,255,255,.22)",

              backdropFilter: "blur(10px)",
            }}
          >
            <LocationOnIcon
              sx={{
                fontSize: 17,
                color: "#90caf9",
              }}
            />

            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "0.72rem",
                letterSpacing: 1.7,
              }}
            >
              TCS ADIBATLA • HYDERABAD
            </Typography>
          </Box>

          {/* ================= HEADING ================= */}

          <Typography
            component="h1"
            sx={{
              color: "#ffffff",

              fontWeight: 800,

              fontSize: {
                xs: "2.7rem",
                sm: "3.6rem",
                md: "4.6rem",
              },

              lineHeight: {
                xs: 1.08,
                md: 1.05,
              },

              letterSpacing: "-0.045em",
            }}
          >
            Comfortable Living.
            <Box
              component="span"
              sx={{
                display: "block",
                color: "#90caf9",
              }}
            >
              Peaceful Stay.
            </Box>
          </Typography>

          {/* ================= DESCRIPTION ================= */}

          <Typography
            sx={{
              mt: 3,

              maxWidth: 610,

              color:
                "rgba(255,255,255,.86)",

              fontSize: {
                xs: "0.98rem",
                sm: "1.02rem",
                md: "1.08rem",
              },

              lineHeight: 1.8,
            }}
          >
            Welcome to Skyline PG — a clean,
            comfortable and convenient place to
            stay near TCS Adibatla, Hyderabad.
            Choose from our AC and Non-AC rooms
            designed for comfortable everyday
            living.
          </Typography>

          {/* ================= BUTTONS ================= */}

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={1.5}
            sx={{
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={
                <ArrowForwardIcon />
              }
              onClick={handleBooking}
              sx={{
                minWidth: 195,

                py: 1.55,

                borderRadius: 2.5,

                textTransform: "none",

                fontWeight: 800,

                fontSize: "0.95rem",

                background: "#1565C0",

                boxShadow:
                  "0 10px 28px rgba(0,0,0,.25)",

                "&:hover": {
                  background: "#0D47A1",
                },
              }}
            >
              Check Availability
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={handleRooms}
              sx={{
                minWidth: 150,

                py: 1.55,

                borderRadius: 2.5,

                textTransform: "none",

                fontWeight: 800,

                fontSize: "0.95rem",

                color: "#ffffff",

                borderColor:
                  "rgba(255,255,255,.60)",

                background:
                  "rgba(255,255,255,.08)",

                backdropFilter:
                  "blur(8px)",

                "&:hover": {
                  color: "#ffffff",

                  borderColor:
                    "#ffffff",

                  background:
                    "rgba(255,255,255,.16)",
                },
              }}
            >
              View Rooms
            </Button>
          </Stack>

          {/* ================= FEATURES ================= */}

          <Box
            sx={{
              display: "flex",

              flexWrap: "wrap",

              gap: {
                xs: 2,
                sm: 3,
              },

              mt: 4,
pt: 2.5,

              borderTop:
                "1px solid rgba(255,255,255,.18)",
            }}
          >
            <HeroFeature
              icon={<BedIcon />}
              title="Comfortable Rooms"
            />

            <HeroFeature
              icon={<WifiIcon />}
              title="Essential Facilities"
            />

            <HeroFeature
              icon={<SecurityIcon />}
              title="Secure Environment"
            />
          </Box>
        </Box>
      </Container>

      {/* ================= BOTTOM FADE ================= */}

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,

          height: 90,

          background:
            "linear-gradient(transparent, rgba(248,250,252,.85))",

          pointerEvents: "none",
        }}
      />
    </Box>
  );
};


/* ================================================= */
/* HERO FEATURE */
/* ================================================= */

const HeroFeature = ({ icon, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.1,
      }}
    >
      <Box
        sx={{
          width: 38,
          height: 38,
          minWidth: 38,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderRadius: 2,

          color: "#ffffff",

          background:
            "rgba(255,255,255,.11)",

          border:
            "1px solid rgba(255,255,255,.18)",

          backdropFilter:
            "blur(8px)",
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          color:
            "rgba(255,255,255,.90)",

          fontSize: {
            xs: "0.76rem",
            sm: "0.82rem",
          },

          fontWeight: 700,

          whiteSpace: "nowrap",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Hero;