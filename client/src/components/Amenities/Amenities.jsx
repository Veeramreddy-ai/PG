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
import TvIcon from "@mui/icons-material/Tv";

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
    icon: <TvIcon />,
    title: "TV in Rooms",
    description:
      "Enjoy TV entertainment in your room during your free time.",
  },
  {
    icon: <RestaurantIcon />,
    title: "Hygienic Food",
    description:
      "Fresh and hygienically prepared meals for everyday convenience.",
  },
  {
    icon: <WaterDropIcon />,
    title: "Hot Water",
    description:
      "Hot water facility available for a comfortable daily routine.",
  },
  {
    icon: <SecurityIcon />,
    title: "Secure Environment",
    description:
      "A safe and peaceful environment designed for comfortable living.",
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
    title: "Comfortable Beds",
    description:
      "Well-maintained beds designed for comfortable everyday living.",
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

        {/* ================= HEADER ================= */}

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
              letterSpacing: 1.8,
              fontSize: "0.85rem",
            }}
          >
            AMENITIES
          </Typography>

          <Typography
            component="h2"
            sx={{
              mt: 1.5,
              fontWeight: 900,
              color: "#0f172a",
              fontSize: {
                xs: "2rem",
                sm: "2.6rem",
                md: "3.3rem",
              },
              lineHeight: 1.15,
              letterSpacing: "-0.035em",
            }}
          >
            Everything You Need
            <br />

            <Box
              component="span"
              sx={{
                color: "#1565C0",
              }}
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
            From everyday essentials to comfort-focused facilities,
            Skyline PG provides the facilities you need for a
            convenient and hassle-free stay.
          </Typography>
        </Box>

        {/* ================= AMENITIES GRID ================= */}

        <Grid
          container
          spacing={{ xs: 2.5, sm: 3 }}
        >
          {amenities.map((amenity) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={amenity.title}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: 230,
                  p: {
                    xs: 3,
                    md: 3.5,
                  },
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",

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
                    transform: "translateY(-6px)",
                    borderColor: "#bfdbfe",
                    boxShadow:
                      "0 18px 40px rgba(15, 23, 42, 0.10)",

                    "&::before": {
                      transform: "scaleX(1)",
                    },

                    "& .amenity-icon": {
                      transform: "scale(1.08)",
                      backgroundColor: "#1565C0",
                      color: "#ffffff",
                    },
                  },
                }}
              >
                {/* ICON */}

                <Box
                  className="amenity-icon"
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#eff6ff",
                    color: "#1565C0",
                    mb: 2.5,
                    transition:
                      "all 0.3s ease",
                  }}
                >
                  {amenity.icon}
                </Box>

                {/* TITLE */}

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    color: "#0f172a",
                  }}
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

        {/* ================= BOTTOM HIGHLIGHT ================= */}

        <Paper
          elevation={0}
          sx={{
            mt: {
              xs: 5,
              md: 7,
            },
            p: {
              xs: 3,
              md: 4,
            },
            borderRadius: 4,
            background:
              "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)",
            border: "1px solid #dbeafe",
          }}
        >
          <Grid
            container
            spacing={3}
            alignItems="center"
          >
            <Grid
              size={{
                xs: 12,
                md: 8,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: "1.15rem",
                    md: "1.35rem",
                  },
                  color: "#0f172a",
                }}
              >
                Comfortable living starts with
                the right facilities.
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#64748b",
                  lineHeight: 1.7,
                }}
              >
                Skyline PG brings essential
                amenities together so you can
                enjoy a comfortable and convenient
                everyday stay.
              </Typography>
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
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
                  sx={{
                    fontWeight: 800,
                    color: "#1565C0",
                    fontSize: "0.85rem",
                  }}
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