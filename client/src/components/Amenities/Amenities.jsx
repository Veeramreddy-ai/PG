import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SecurityIcon from "@mui/icons-material/Security";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import BedIcon from "@mui/icons-material/Bed";

const amenities = [
  {
    icon: <WifiIcon />,
    title: "High-Speed Wi-Fi",
    description:
      "Stay connected with reliable internet for work, study and entertainment.",
  },
  {
    icon: <AcUnitIcon />,
    title: "AC Rooms",
    description:
      "Comfortable air-conditioned rooms designed for a pleasant stay.",
  },
  {
    icon: <RestaurantIcon />,
    title: "Hygienic Food",
    description:
      "Fresh and hygienically prepared meals for everyday convenience.",
  },
  {
    icon: <WaterDropIcon />,
    title: "24/7 Water",
    description:
      "Reliable water availability for your daily needs.",
  },
  {
    icon: <SecurityIcon />,
    title: "Security",
    description:
      "A safe and peaceful environment for all residents.",
  },
  {
    icon: <CleaningServicesIcon />,
    title: "Housekeeping",
    description:
      "Clean and well-maintained rooms and common areas.",
  },
  {
    icon: <LocalLaundryServiceIcon />,
    title: "Laundry Facility",
    description:
      "Convenient laundry facilities to make everyday living easier.",
  },
  {
    icon: <BedIcon />,
    title: "Comfortable Stay",
    description:
      "Well-equipped rooms focused on comfort and convenience.",
  },
];

const Amenities = () => {
  return (
    <Box
      id="amenities"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">

        {/* SECTION HEADER */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 720,
            mx: "auto",
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
            AMENITIES
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
            Everything You Need
            <br />
            <Box
              component="span"
              sx={{ color: "#1565C0" }}
            >
              Under One Roof
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
            From everyday essentials to comfort-focused
            facilities, Skyline PG provides the amenities
            you need for a convenient and hassle-free stay.
          </Typography>
        </Box>

        {/* AMENITIES GRID */}
        <Grid
          container
          spacing={{ xs: 2.5, sm: 3, md: 3 }}
        >
          {amenities.map((amenity) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={amenity.title}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: 235,
                  p: { xs: 3, md: 3.2 },
                  borderRadius: 4,
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#ffffff",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 3,
                    backgroundColor: "#1565C0",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease",
                  },

                  "&:hover": {
                    transform: "translateY(-7px)",
                    boxShadow:
                      "0 18px 40px rgba(15, 23, 42, 0.09)",
                    borderColor: "#bfdbfe",

                    "&::before": {
                      transform: "scaleX(1)",
                    },
                  },
                }}
              >
                {/* ICON */}
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
                    mb: 2.5,
                  }}
                >
                  {amenity.icon}
                </Box>

                {/* TITLE */}
                <Typography
                  fontWeight={800}
                  fontSize="1.05rem"
                  color="#0f172a"
                >
                  {amenity.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    mt: 1.2,
                    color: "#64748b",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {amenity.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* BOTTOM HIGHLIGHT */}
        <Paper
          elevation={0}
          sx={{
            mt: { xs: 5, md: 7 },
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background:
              "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
            border: "1px solid #dbeafe",
          }}
        >
          <Grid
            container
            spacing={3}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                fontWeight={800}
                fontSize={{
                  xs: "1.15rem",
                  md: "1.35rem",
                }}
                color="#0f172a"
              >
                A comfortable stay starts with the right
                facilities.
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#64748b",
                  lineHeight: 1.7,
                }}
              >
                Skyline PG brings essential amenities together
                so you can focus on what matters most.
              </Typography>
            </Grid>

            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-end",
                },
              }}
            >
              <Box
                sx={{
                  px: 2.5,
                  py: 1.3,
                  borderRadius: 2,
                  backgroundColor: "#ffffff",
                  border: "1px solid #dbeafe",
                }}
              >
                <Typography
                  fontWeight={800}
                  color="#1565C0"
                  fontSize="0.9rem"
                >
                  Comfort • Cleanliness • Convenience
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

      </Container>
    </Box>
  );
};

export default Amenities;