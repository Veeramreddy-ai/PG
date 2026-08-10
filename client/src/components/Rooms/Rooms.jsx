import { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  Stack,
  Dialog,
  DialogContent,
  IconButton,
  Divider,
} from "@mui/material";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import TvIcon from "@mui/icons-material/Tv";
import BedIcon from "@mui/icons-material/Bed";
import PersonIcon from "@mui/icons-material/Person";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VisibilityIcon from "@mui/icons-material/Visibility";

import rooms from "../../data/rooms";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const handleAvailability = (room) => {
    setSelectedRoom(null);

    setTimeout(() => {
      const bookingSection =
        document.getElementById("booking");

      if (bookingSection) {
        bookingSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      window.dispatchEvent(
        new CustomEvent("selectRoom", {
          detail: room,
        })
      );
    }, 150);
  };

  const getAmenityIcon = (amenity) => {
    const value = amenity.toLowerCase();

    if (value === "ac") {
      return <AcUnitIcon fontSize="small" />;
    }

    if (value === "tv") {
      return <TvIcon fontSize="small" />;
    }

    if (value === "fan") {
      return <AirIcon fontSize="small" />;
    }

    if (value === "hot water") {
      return <WaterDropIcon fontSize="small" />;
    }

    if (
      value.includes("bed")
    ) {
      return <BedIcon fontSize="small" />;
    }

    return <BedIcon fontSize="small" />;
  };

  return (
    <Box
      id="rooms"
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
            maxWidth: 720,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 5, md: 8 },
          }}
        >
          <Typography
            sx={{
              display: "inline-block",
              color: "#1565C0",
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: "0.8rem",
              mb: 1.5,
            }}
          >
            OUR ROOMS
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#0f172a",
              fontWeight: 800,
              fontSize: {
                xs: "2.15rem",
                sm: "2.7rem",
                md: "3.2rem",
              },
              lineHeight: 1.15,
            }}
          >
            Comfortable Rooms
            <Box
              component="span"
              sx={{
                display: "block",
                color: "#1565C0",
              }}
            >
              For Your Stay
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#64748b",
              lineHeight: 1.8,
              fontSize: "0.98rem",
            }}
          >
            Choose from our 1, 2 and 3 bed AC and
            Non-AC rooms, designed for comfortable
            everyday living.
          </Typography>
        </Box>

        {/* ================= ROOMS ================= */}

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {rooms.map((room) => (
            <Grid
              key={room.id}
              size={{
                xs: 12,
                sm: 6,
                lg: 4,
              }}
            >
              <Card
                elevation={0}
                onClick={() => handleRoomClick(room)}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  borderRadius: 4,
                  background: "#ffffff",
                  border:
                    "1px solid #e2e8f0",
                  cursor: "pointer",

                  transition:
                    "transform .3s ease, box-shadow .3s ease, border-color .3s ease",

                  "&:hover": {
                    transform:
                      "translateY(-7px)",
                    borderColor:
                      "#bfdbfe",
                    boxShadow:
                      "0 20px 45px rgba(15,23,42,.12)",
                  },
                }}
              >

                {/* IMAGE */}

                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={room.image}
                    alt={room.title}
                    sx={{
                      width: "100%",
                      height: {
                        xs: 230,
                        sm: 240,
                        md: 250,
                      },
                      objectFit: "cover",
                      display: "block",
                      transition:
                        "transform .5s ease",

                      ".MuiCard-root:hover &": {
                        transform:
                          "scale(1.05)",
                      },
                    }}
                  />

                  {/* IMAGE OVERLAY */}

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(15,23,42,.55), transparent 50%)",
                    }}
                  />

                  {/* TYPE */}

                  <Chip
                    label={room.type}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      height: 30,
                      px: 0.5,
                      borderRadius: 2,
                      background:
                        room.type === "AC"
                          ? "#1565C0"
                          : "#334155",
                      color: "#ffffff",
                      fontWeight: 800,
                    }}
                  />

                  {/* VIEW */}

                  <Box
                    sx={{
                      position: "absolute",
                      right: 14,
                      bottom: 14,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                      px: 1.3,
                      py: 0.7,
                      borderRadius: 2,
                      background:
                        "rgba(255,255,255,.94)",
                      backdropFilter:
                        "blur(8px)",
                    }}
                  >
                    <VisibilityIcon
                      sx={{
                        fontSize: 16,
                        color: "#0f172a",
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#0f172a",
                      }}
                    >
                      View Details
                    </Typography>
                  </Box>
                </Box>

                {/* CONTENT */}

                <CardContent
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "#0f172a",
                    }}
                  >
                    {room.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                      mt: 0.8,
                      mb: 2.3,
                    }}
                  >
                    <PersonIcon
                      sx={{
                        fontSize: 18,
                        color: "#1565C0",
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: "0.88rem",
                        color: "#64748b",
                        fontWeight: 600,
                      }}
                    >
                      {room.occupancy}
                    </Typography>
                  </Box>

                  <Divider sx={{ mb: 2 }} />

                  {/* AMENITIES */}

                  <Stack
                    direction="row"
                    spacing={0.8}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mb: 3 }}
                  >
                    {room.amenities.map(
                      (amenity) => (
                        <Chip
                          key={amenity}
                          icon={getAmenityIcon(
                            amenity
                          )}
                          label={amenity}
                          size="small"
                          sx={{
                            height: 30,
                            borderRadius: 1.8,
                            background:
                              "#f8fafc",
                            border:
                              "1px solid #e2e8f0",
                            color: "#475569",
                            fontWeight: 600,

                            "& .MuiChip-icon": {
                              color:
                                "#1565C0",
                            },
                          }}
                        />
                      )
                    )}
                  </Stack>

                  {/* BUTTON */}

                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={
                      <ArrowForwardIcon />
                    }
                    onClick={(event) => {
                      event.stopPropagation();
                      handleAvailability(
                        room
                      );
                    }}
                    sx={{
                      mt: "auto",
                      py: 1.35,
                      borderRadius: 2.5,
                      textTransform: "none",
                      fontWeight: 800,
                      background:
                        "#1565C0",

                      "&:hover": {
                        background:
                          "#0D47A1",
                      },
                    }}
                  >
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* ================================================= */}
        {/* PROFESSIONAL ROOM DIALOG */}
        {/* ================================================= */}

        <Dialog
          open={Boolean(selectedRoom)}
          onClose={() => setSelectedRoom(null)}
          fullWidth
          maxWidth="md"
          scroll="body"
          PaperProps={{
            sx: {
              m: { xs: 1.5, sm: 3 },
              borderRadius: {
                xs: 3,
                sm: 4,
              },
              overflow: "hidden",
              background: "#ffffff",
              boxShadow:
                "0 30px 80px rgba(15,23,42,.22)",
            },
          }}
        >
          {selectedRoom && (
            <Box>

              {/* DIALOG IMAGE */}

              <Box
                sx={{
                  position: "relative",
                  height: {
                    xs: 240,
                    sm: 340,
                  },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={selectedRoom.image}
                  alt={selectedRoom.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(15,23,42,.05) 25%, rgba(15,23,42,.78) 100%)",
                  }}
                />

                {/* CLOSE */}

                <IconButton
                  onClick={() =>
                    setSelectedRoom(null)
                  }
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    width: 42,
                    height: 42,
                    background:
                      "rgba(255,255,255,.95)",
                    color: "#0f172a",

                    "&:hover": {
                      background:
                        "#ffffff",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>

                {/* TITLE */}

                <Box
                  sx={{
                    position: "absolute",
                    left: {
                      xs: 18,
                      sm: 28,
                    },
                    right: 18,
                    bottom: 20,
                  }}
                >
                  <Chip
                    label={selectedRoom.type}
                    size="small"
                    sx={{
                      mb: 1,
                      background:
                        selectedRoom.type ===
                        "AC"
                          ? "#1565C0"
                          : "#334155",
                      color: "#ffffff",
                      fontWeight: 800,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: {
                        xs: "1.55rem",
                        sm: "2rem",
                      },
                      lineHeight: 1.2,
                    }}
                  >
                    {selectedRoom.title}
                  </Typography>
                </Box>
              </Box>

              {/* DIALOG CONTENT */}

              <DialogContent
                sx={{
                  p: {
                    xs: 2.5,
                    sm: 4,
                  },
                }}
              >

                {/* QUICK INFO */}

                <Grid
                  container
                  spacing={2}
                  sx={{ mb: 3 }}
                >
                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems:
                          "center",
                        gap: 1.5,
                        p: 1.7,
                        borderRadius: 2.5,
                        background:
                          "#f8fafc",
                        border:
                          "1px solid #e2e8f0",
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: 2,
                          display: "flex",
                          alignItems:
                            "center",
                          justifyContent:
                            "center",
                          background:
                            "#eff6ff",
                          color:
                            "#1565C0",
                        }}
                      >
                        <PersonIcon />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize:
                              "0.7rem",
                            fontWeight: 800,
                            color:
                              "#94a3b8",
                            letterSpacing:
                              0.5,
                          }}
                        >
                          OCCUPANCY
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 800,
                            color:
                              "#0f172a",
                          }}
                        >
                          {
                            selectedRoom.occupancy
                          }
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems:
                          "center",
                        gap: 1.5,
                        p: 1.7,
                        borderRadius: 2.5,
                        background:
                          "#f8fafc",
                        border:
                          "1px solid #e2e8f0",
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: 2,
                          display: "flex",
                          alignItems:
                            "center",
                          justifyContent:
                            "center",
                          background:
                            selectedRoom.type ===
                            "AC"
                              ? "#eff6ff"
                              : "#f1f5f9",
                          color:
                            selectedRoom.type ===
                            "AC"
                              ? "#1565C0"
                              : "#475569",
                        }}
                      >
                        {selectedRoom.type ===
                        "AC" ? (
                          <AcUnitIcon />
                        ) : (
                          <AirIcon />
                        )}
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize:
                              "0.7rem",
                            fontWeight: 800,
                            color:
                              "#94a3b8",
                            letterSpacing:
                              0.5,
                          }}
                        >
                          ROOM TYPE
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 800,
                            color:
                              "#0f172a",
                          }}
                        >
                          {
                            selectedRoom.type
                          }
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={{ mb: 3 }} />

                {/* FACILITIES */}

                <Typography
                  sx={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 2,
                  }}
                >
                  Room Facilities
                </Typography>

                <Grid container spacing={1.5}>
                  {selectedRoom.amenities.map(
                    (amenity) => (
                      <Grid
                        key={amenity}
                        size={{
                          xs: 6,
                          sm: 4,
                        }}
                      >
                        <Box
                          sx={{
                            minHeight: 58,
                            display: "flex",
                            alignItems:
                              "center",
                            gap: 1.2,
                            px: 1.5,
                            borderRadius: 2.5,
                            background:
                              "#ffffff",
                            border:
                              "1px solid #e2e8f0",
                          }}
                        >
                          <Box
                            sx={{
                              width: 34,
                              height: 34,
                              minWidth: 34,
                              display: "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",
                              borderRadius: 1.8,
                              background:
                                "#eff6ff",
                              color:
                                "#1565C0",
                            }}
                          >
                            {getAmenityIcon(
                              amenity
                            )}
                          </Box>

                          <Typography
                            sx={{
                              fontSize:
                                "0.83rem",
                              fontWeight: 700,
                              color:
                                "#475569",
                            }}
                          >
                            {amenity}
                          </Typography>
                        </Box>
                      </Grid>
                    )
                  )}
                </Grid>

                {/* DESCRIPTION */}

                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    borderRadius: 2.5,
                    background:
                      "#f8fafc",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.75,
                      fontSize:
                        "0.9rem",
                    }}
                  >
                    A clean and comfortable
                    room at Skyline PG with
                    essential facilities for a
                    convenient and peaceful
                    stay.
                  </Typography>
                </Box>

                {/* CTA */}

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  endIcon={
                    <ArrowForwardIcon />
                  }
                  onClick={() =>
                    handleAvailability(
                      selectedRoom
                    )
                  }
                  sx={{
                    mt: 3,
                    py: 1.5,
                    borderRadius: 2.5,
                    textTransform: "none",
                    fontWeight: 800,
                    fontSize: "0.98rem",
                    background:
                      "#1565C0",

                    "&:hover": {
                      background:
                        "#0D47A1",
                    },
                  }}
                >
                  Check Availability
                </Button>

              </DialogContent>
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Rooms;