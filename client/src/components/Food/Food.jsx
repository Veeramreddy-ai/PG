import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
} from "@mui/material";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const menu = [
  {
    icon: <BreakfastDiningIcon />,
    time: "MORNING",
    title: "Breakfast",
    items: ["Idly", "Uthapam", "Upma"],
  },
  {
    icon: <LunchDiningIcon />,
    time: "AFTERNOON",
    title: "Lunch",
    items: [
      "Bhagara Rice",
      "Sambar",
      "Dal",
      "Veg Curry",
      "Chicken Curry",
    ],
  },
  {
    icon: <DinnerDiningIcon />,
    time: "NIGHT",
    title: "Dinner",
    items: [
      "Chapati",
      "Paneer Curry",
      "Chicken Curry",
      "Fried Rice",
    ],
  },
];

const foodHighlights = [
  "Freshly prepared meals",
  "Hygienic food preparation",
  "Variety of vegetarian & non-vegetarian options",
  "Comfortable dining environment",
];

const Food = () => {
  return (
    <Box
      id="food"
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
            FOOD & DINING
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
            Fresh Food,
            <br />
            <Box
              component="span"
              sx={{ color: "#1565C0" }}
            >
              Every Day
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
            Enjoy fresh and hygienically prepared meals
            throughout the day, with a balanced selection
            of vegetarian and non-vegetarian options.
          </Typography>
        </Box>

        {/* MAIN FOOD IMAGE */}
        <Box
          sx={{
            position: "relative",
            height: {
              xs: 260,
              sm: 340,
              md: 400,
            },
            borderRadius: 5,
            overflow: "hidden",
            mb: { xs: 5, md: 7 },
            boxShadow:
              "0 20px 50px rgba(15,23,42,0.12)",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=90"
            alt="Fresh food at Skyline PG"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* IMAGE OVERLAY */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 16, md: 30 },
              right: { xs: 16, md: 30 },
              bottom: { xs: 16, md: 30 },
              p: { xs: 2, md: 3 },
              borderRadius: 3,
              backgroundColor: "rgba(255,255,255,0.94)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
              }}
            >
              <RestaurantIcon
                sx={{
                  color: "#1565C0",
                  fontSize: 26,
                }}
              />

              <Typography
                fontWeight={800}
                color="#0f172a"
                fontSize={{
                  xs: "1rem",
                  md: "1.15rem",
                }}
              >
                Delicious & Hygienic Meals
              </Typography>
            </Box>

            <Typography
              sx={{
                mt: 0.7,
                color: "#64748b",
                fontSize: "0.85rem",
              }}
            >
              Prepared with care for a comfortable stay.
            </Typography>
          </Box>
        </Box>

        {/* SAMPLE MENU HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              color: "#1565C0",
              fontWeight: 800,
              letterSpacing: 1.2,
              fontSize: "0.85rem",
            }}
          >
            SAMPLE MENU
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mt: 1,
              fontWeight: 900,
              color: "#0f172a",
              fontSize: {
                xs: "1.7rem",
                md: "2.3rem",
              },
            }}
          >
            What We Serve
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#64748b",
              fontSize: "0.9rem",
            }}
          >
            Menu items may vary from day to day.
          </Typography>
        </Box>

        {/* MENU CARDS */}
        <Grid
          container
          spacing={{ xs: 2.5, md: 3 }}
        >
          {menu.map((meal) => (
            <Grid
              size={{ xs: 12, md: 4 }}
              key={meal.title}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: 310,
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-7px)",
                    borderColor: "#bfdbfe",
                    boxShadow:
                      "0 18px 40px rgba(15,23,42,0.09)",
                  },
                }}
              >
                {/* ICON + TIME */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 54,
                      height: 54,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#eff6ff",
                      color: "#1565C0",
                    }}
                  >
                    {meal.icon}
                  </Box>

                  <Chip
                    label={meal.time}
                    size="small"
                    sx={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      fontWeight: 800,
                      fontSize: "0.68rem",
                    }}
                  />
                </Box>

                {/* TITLE */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    color: "#0f172a",
                    mb: 2.5,
                  }}
                >
                  {meal.title}
                </Typography>

                {/* ITEMS */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  {meal.items.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.2,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "#16a34a",
                          fontSize: 19,
                        }}
                      />

                      <Typography
                        color="#475569"
                        fontSize="0.92rem"
                        fontWeight={600}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* FOOD HIGHLIGHTS */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background:
                "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
              border: "1px solid #dbeafe",
            }}
          >
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              alignItems="center"
            >
              {/* LEFT */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography
                  fontWeight={900}
                  color="#0f172a"
                  fontSize={{
                    xs: "1.2rem",
                    md: "1.4rem",
                  }}
                >
                  Food You Can Feel Good About
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    color: "#64748b",
                    lineHeight: 1.7,
                    fontSize: "0.9rem",
                  }}
                >
                  We focus on freshness, hygiene and
                  variety to make everyday meals enjoyable.
                </Typography>
              </Grid>

              {/* RIGHT */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Grid
                  container
                  spacing={2}
                >
                  {foodHighlights.map((feature) => (
                    <Grid
                      size={{ xs: 12, sm: 6 }}
                      key={feature}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.2,
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: "#16a34a",
                            fontSize: 21,
                          }}
                        />

                        <Typography
                          color="#475569"
                          fontWeight={600}
                          fontSize="0.88rem"
                        >
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>

      </Container>
    </Box>
  );
};

export default Food;