import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SecurityIcon from "@mui/icons-material/Security";

const Hero = () => {
  const scrollToBooking = () => {
    document
      .getElementById("pre-booking")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToRooms = () => {
    document
      .getElementById("rooms")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: {
          xs: "auto",
          md: "calc(100vh - 72px)",
        },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f8fbff 0%, #eef6ff 100%)",
        py: {
          xs: 8,
          md: 10,
        },
      }}
    >
      {/* BACKGROUND DECORATION */}
      <Box
        sx={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "#dbeafe",
          opacity: 0.45,
          filter: "blur(10px)",
          top: -180,
          right: -120,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "#e0f2fe",
          opacity: 0.5,
          bottom: -150,
          left: -100,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: 850,
            mx: "auto",
            textAlign: "center",
          }}
        >
          {/* BADGE */}
          <Chip
            icon={<LocationOnIcon />}
            label="Adibatla, Bongloor, Telangana"
            sx={{
              mb: 3,
              px: 1,
              py: 2.5,
              borderRadius: 10,
              backgroundColor: "#ffffff",
              color: "#1565C0",
              border: "1px solid #dbeafe",
              fontWeight: 800,
              boxShadow:
                "0 8px 25px rgba(15,23,42,0.06)",
              "& .MuiChip-icon": {
                color: "#1565C0",
              },
            }}
          />

          {/* MAIN HEADING */}
          <Typography
            component="h1"
            sx={{
              fontWeight: 950,
              color: "#0f172a",
              fontSize: {
                xs: "2.6rem",
                sm: "3.5rem",
                md: "4.7rem",
              },
              lineHeight: {
                xs: 1.1,
                md: 1.05,
              },
              letterSpacing: {
                xs: "-1px",
                md: "-2px",
              },
            }}
          >
            Welcome to{" "}
            <Box
              component="span"
              sx={{
                color: "#1565C0",
              }}
            >
              Skyline PG
            </Box>
          </Typography>

          {/* SUBTITLE */}
          <Typography
            sx={{
              mt: 2.5,
              color: "#475569",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
              },
              lineHeight: 1.8,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            A comfortable, clean and convenient place to
            stay for students and working professionals.
          </Typography>

          {/* CTA BUTTONS */}
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            justifyContent="center"
            sx={{
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={scrollToBooking}
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 3.5,
                py: 1.5,
                borderRadius: 2.5,
                textTransform: "none",
                fontWeight: 800,
                fontSize: "1rem",
                backgroundColor: "#1565C0",
                boxShadow:
                  "0 10px 25px rgba(21,101,192,0.25)",

                "&:hover": {
                  backgroundColor: "#0D47A1",
                  boxShadow:
                    "0 14px 30px rgba(21,101,192,0.3)",
                },
              }}
            >
              Check Availability
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={scrollToRooms}
              sx={{
                px: 3.5,
                py: 1.5,
                borderRadius: 2.5,
                textTransform: "none",
                fontWeight: 800,
                fontSize: "1rem",
                borderColor: "#bfdbfe",
                color: "#1565C0",
                backgroundColor: "#ffffff",

                "&:hover": {
                  borderColor: "#1565C0",
                  backgroundColor: "#eff6ff",
                },
              }}
            >
              Explore Rooms
            </Button>
          </Stack>

          {/* QUICK HIGHLIGHTS */}
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: {
                xs: 1.5,
                md: 2,
              },
            }}
          >
            {[
              {
                icon: <WifiIcon />,
                text: "Wi-Fi",
              },
              {
                icon: <RestaurantIcon />,
                text: "Food",
              },
              {
                icon: <SecurityIcon />,
                text: "Secure Stay",
              },
            ].map((item) => (
              <Box
                key={item.text}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1.2,
                  borderRadius: 3,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  color: "#334155",
                  boxShadow:
                    "0 6px 20px rgba(15,23,42,0.04)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    color: "#1565C0",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  fontWeight={700}
                  fontSize="0.85rem"
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;