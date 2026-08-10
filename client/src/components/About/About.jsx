import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const highlights = [
  {
    icon: <SecurityIcon />,
    title: "Safe & Secure",
    text: "A peaceful and secure environment for comfortable everyday living.",
  },
  {
    icon: <WifiIcon />,
    title: "High-Speed Wi-Fi",
    text: "Reliable internet connectivity for work, study and entertainment.",
  },
  {
    icon: <RestaurantIcon />,
    title: "Hygienic Food",
    text: "Fresh and hygienically prepared food for a convenient stay.",
  },
  {
    icon: <CleaningServicesIcon />,
    title: "Clean & Maintained",
    text: "Clean rooms and well-maintained common areas for a better experience.",
  },
];

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">

        {/* SECTION HEADING */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 760,
            mx: "auto",
            mb: { xs: 6, md: 9 },
          }}
        >
          <Typography
            sx={{
              color: "#1565C0",
              fontWeight: 800,
              letterSpacing: 1.5,
              fontSize: "0.9rem",
            }}
          >
            ABOUT SKYLINE PG
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1.5,
              fontWeight: 900,
              color: "#0f172a",
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3.2rem",
              },
              lineHeight: 1.15,
            }}
          >
            Comfortable Living.
            <br />
            <Box
              component="span"
              sx={{ color: "#1565C0" }}
            >
              Better Experience.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              color: "#64748b",
              fontSize: {
                xs: "0.95rem",
                md: "1.05rem",
              },
              lineHeight: 1.8,
            }}
          >
            Skyline PG provides a clean, comfortable and
            peaceful living environment for students and
            working professionals. We focus on the facilities
            that make everyday life convenient and stress-free.
          </Typography>
        </Box>

        {/* ABOUT CONTENT */}
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          alignItems="center"
        >

          {/* IMAGE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                height: {
                  xs: 340,
                  sm: 430,
                  md: 520,
                },
                borderRadius: 5,
                overflow: "hidden",
                boxShadow:
                  "0 20px 50px rgba(15,23,42,0.12)",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90"
                alt="Comfortable PG living area"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* IMAGE LABEL */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 16, md: 24 },
                  right: { xs: 16, md: 24 },
                  bottom: { xs: 16, md: 24 },
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: "rgba(255,255,255,0.94)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography
                  fontWeight={800}
                  color="#0f172a"
                >
                  Skyline PG
                </Typography>

                <Typography
                  color="#64748b"
                  fontSize="0.9rem"
                  mt={0.5}
                >
                  Clean • Comfortable • Convenient
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* TEXT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                color: "#1565C0",
                fontWeight: 700,
                letterSpacing: 1,
                mb: 1,
              }}
            >
              OUR APPROACH
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: "#0f172a",
                fontSize: {
                  xs: "1.8rem",
                  md: "2.5rem",
                },
                lineHeight: 1.25,
                mb: 2.5,
              }}
            >
              More Than Just
              <br />
              A Place to Stay
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                lineHeight: 1.85,
                mb: 2,
              }}
            >
              At Skyline PG, our goal is to provide residents
              with a comfortable place where they can focus
              on their work, studies and personal life.
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                lineHeight: 1.85,
                mb: 3.5,
              }}
            >
              From hygienic food and Wi-Fi to clean surroundings
              and a secure environment, we bring essential
              facilities together to make your stay convenient.
            </Typography>

            {/* CHECK LIST */}
            <Stack spacing={1.8}>
              {[
                "Clean and well-maintained premises",
                "Comfortable accommodation",
                "Hygienic food facilities",
                "Essential amenities for daily living",
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#16a34a",
                      fontSize: 22,
                    }}
                  />

                  <Typography
                    fontWeight={600}
                    color="#334155"
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* WHY CHOOSE US */}
        <Box
          sx={{
            mt: { xs: 9, md: 13 },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
              mb: { xs: 5, md: 6 },
            }}
          >
            <Typography
              sx={{
                color: "#1565C0",
                fontWeight: 800,
                letterSpacing: 1.5,
                fontSize: "0.9rem",
              }}
            >
              WHY CHOOSE US
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mt: 1.5,
                fontWeight: 900,
                color: "#0f172a",
                fontSize: {
                  xs: "1.8rem",
                  md: "2.5rem",
                },
              }}
            >
              Everything You Need
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              Designed around comfort, cleanliness,
              convenience and peace of mind.
            </Typography>
          </Box>

          {/* 2 x 2 CARDS */}
          <Grid
            container
            spacing={{ xs: 2.5, md: 3 }}
          >
            {highlights.map((item) => (
              <Grid
                size={{ xs: 12, sm: 6 }}
                key={item.title}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    minHeight: 190,
                    height: "100%",
                    borderRadius: 4,
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "#90caf9",
                      boxShadow:
                        "0 18px 40px rgba(15,23,42,0.09)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#eff6ff",
                      color: "#1565C0",
                      mb: 2.5,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    fontWeight={800}
                    fontSize="1.1rem"
                    color="#0f172a"
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      color: "#64748b",
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default About;