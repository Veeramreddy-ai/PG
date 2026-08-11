import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import TvIcon from "@mui/icons-material/Tv";
import WifiIcon from "@mui/icons-material/Wifi";
import BedIcon from "@mui/icons-material/Bed";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const About = () => {
  const highlights = [
    {
      icon: <HomeWorkOutlinedIcon />,
      title: "Comfortable Rooms",
      text: "Clean and well-maintained rooms for a comfortable stay.",
    },
    {
      icon: <BedIcon />,
      title: "1, 2 & 3 Bed Options",
      text: "Choose a room based on your preferred sharing requirement.",
    },
    {
      icon: <AcUnitIcon />,
      title: "AC & Non-AC",
      text: "AC and Non-AC room options are available.",
    },
    {
      icon: <TvIcon />,
      title: "TV in Rooms",
      text: "Rooms are provided with TV for your everyday entertainment.",
    },
    {
      icon: <WaterDropIcon />,
      title: "Hot Water",
      text: "Hot water facility is available for comfortable daily living.",
    },
    {
      icon: <SecurityOutlinedIcon />,
      title: "Secure Environment",
      text: "A peaceful and secure environment for residents.",
    },
  ];

  return (
    <Box
      id="about"
      component="section"
      sx={{
        background: "#ffffff",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">

        {/* ================= HEADER ================= */}

        <Box
          sx={{
            textAlign: "center",
            maxWidth: 760,
            mx: "auto",
            mb: { xs: 5, md: 8 },
          }}
        >
          <Typography
            sx={{
              color: "#1565C0",
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: "0.82rem",
              mb: 1.5,
            }}
          >
            ABOUT SKYLINE PG
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: "#0f172a",
              fontWeight: 800,
              fontSize: {
                xs: "2.2rem",
                sm: "2.7rem",
                md: "3.3rem",
              },
              lineHeight: 1.15,
            }}
          >
            A Comfortable Place
            <br />
            <Box
              component="span"
              sx={{
                color: "#1565C0",
              }}
            >
              To Call Your Stay
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#64748b",
              lineHeight: 1.8,
              fontSize: {
                xs: "0.95rem",
                md: "1.02rem",
              },
            }}
          >
            Skyline PG offers clean, comfortable and convenient
            accommodation near TCS Adibatla, Hyderabad. Our rooms
            are designed for peaceful everyday living with essential
            facilities and different sharing options.
          </Typography>
        </Box>

        {/* ================= MAIN ABOUT ================= */}

        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          alignItems="stretch"
        >
          {/* LEFT IMAGE */}

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                minHeight: { xs: 300, md: 500 },
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src="/images/about/skyline-building.png"
                alt="Skyline PG building"
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: { xs: 300, md: 500 },
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* IMAGE OVERLAY */}

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 45%, rgba(15,23,42,.75) 100%)",
                }}
              />

              {/* IMAGE TEXT */}

              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: 28 },
                  right: { xs: 20, md: 28 },
                  bottom: { xs: 20, md: 28 },
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: {
                      xs: "1.4rem",
                      md: "1.7rem",
                    },
                  }}
                >
                  Skyline PG
                </Typography>

                <Typography
                  sx={{
                    mt: 0.5,
                    color: "rgba(255,255,255,.85)",
                    fontSize: "0.9rem",
                  }}
                >
                  TCS Adibatla • Hyderabad
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* RIGHT CONTENT */}

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#0f172a",
                  fontWeight: 800,
                  fontSize: {
                    xs: "1.7rem",
                    md: "2.2rem",
                  },
                  lineHeight: 1.25,
                }}
              >
                Everything you need
                <br />
                for a comfortable stay.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "#64748b",
                  lineHeight: 1.8,
                }}
              >
                Whether you are looking for a single room or a
                sharing option, Skyline PG provides practical room
                choices with essential facilities for everyday
                living.
              </Typography>

              {/* HIGHLIGHTS */}

              <Grid
                container
                spacing={2}
                sx={{
                  mt: 2,
                }}
              >
                {highlights.map((item, index) => (
                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                    }}
                    key={index}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        height: "100%",
                        p: 2.2,
                        borderRadius: 3,
                        border: "1px solid #e2e8f0",
                        background: "#f8fafc",
                        transition: "all .25s ease",

                        "&:hover": {
                          transform: "translateY(-3px)",
                          borderColor: "#90caf9",
                          boxShadow:
                            "0 10px 25px rgba(15,23,42,.08)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#eff6ff",
                          color: "#1565C0",
                          mb: 1.5,
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Typography
                        sx={{
                          color: "#0f172a",
                          fontWeight: 800,
                          fontSize: "0.95rem",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.6,
                          color: "#64748b",
                          fontSize: "0.82rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* SMALL INFO */}

              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 2,
                  borderRadius: 3,
                  background: "#f1f5f9",
                }}
              >
                <BedIcon
                  sx={{
                    color: "#1565C0",
                  }}
                />

                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                  }}
                >
                  Suitable for students and working professionals
                  looking for a peaceful stay near Adibatla.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;