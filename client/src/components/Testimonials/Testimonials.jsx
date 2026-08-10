import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Rating,
} from "@mui/material";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import VerifiedIcon from "@mui/icons-material/Verified";

const testimonials = [
  {
    name: "Rahul",
    role: "Resident",
    review:
      "A very comfortable place to stay. The rooms are clean, the environment is peaceful, and the management is supportive. Wi-Fi and food facilities make daily living convenient.",
  },
  {
    name: "Arjun",
    role: "Resident",
    review:
      "I really liked the overall atmosphere here. The food is hygienically prepared, rooms are well maintained, and the common areas are kept clean. A good option for a hassle-free stay.",
  },
  {
    name: "Kiran",
    role: "Resident",
    review:
      "Skyline PG offers a comfortable and friendly environment. The facilities are useful, the food is good, and the place feels safe and well organized.",
  },
  {
    name: "Vishal",
    role: "Resident",
    review:
      "The stay has been convenient and pleasant. Clean surroundings, comfortable rooms, good food and responsive management make it a nice place for students and working professionals.",
  },
];

const Testimonials = () => {
  return (
    <Box
      id="testimonials"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box
          sx={{
            maxWidth: 760,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 6, md: 8 },
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
            TESTIMONIALS
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
            What Our Residents
            <br />
            <Box
              component="span"
              sx={{ color: "#1565C0" }}
            >
              Say About Us
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              color: "#64748b",
              lineHeight: 1.8,
              fontSize: {
                xs: "0.95rem",
                md: "1.05rem",
              },
            }}
          >
            A few words from residents about their
            experience at Skyline PG.
          </Typography>
        </Box>

        {/* TESTIMONIAL CARDS */}
        <Grid
          container
          spacing={{ xs: 2.5, md: 3 }}
        >
          {testimonials.map((testimonial, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={testimonial.name}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: 350,
                  p: { xs: 3, md: 3.2 },
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-7px)",
                    borderColor: "#bfdbfe",
                    boxShadow:
                      "0 18px 40px rgba(15,23,42,0.09)",
                  },
                }}
              >
                {/* QUOTE ICON */}
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#eff6ff",
                    color: "#1565C0",
                    mb: 2.5,
                  }}
                >
                  <FormatQuoteIcon />
                </Box>

                {/* RATING */}
                <Rating
                  value={5}
                  readOnly
                  size="small"
                  sx={{
                    mb: 2,
                  }}
                />

                {/* REVIEW */}
                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    flexGrow: 1,
                  }}
                >
                  “{testimonial.review}”
                </Typography>

                {/* USER */}
                <Box
                  sx={{
                    mt: 3,
                    pt: 2.5,
                    borderTop: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 42,
                      height: 42,
                      backgroundColor: "#1565C0",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </Avatar>

                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                      }}
                    >
                      <Typography
                        fontWeight={800}
                        color="#0f172a"
                        fontSize="0.9rem"
                      >
                        {testimonial.name}
                      </Typography>

                      <VerifiedIcon
                        sx={{
                          color: "#1565C0",
                          fontSize: 16,
                        }}
                      />
                    </Box>

                    <Typography
                      color="#94a3b8"
                      fontSize="0.75rem"
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* BOTTOM TRUST MESSAGE */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            textAlign: "center",
          }}
        >
          <Typography
            color="#64748b"
            fontSize="0.9rem"
          >
            Comfortable stay • Clean environment •
            Supportive management
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Testimonials;