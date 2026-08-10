import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Amenities", id: "amenities" },
    { label: "Rooms", id: "rooms" },
    { label: "Food", id: "food" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "testimonials" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  const handleBooking = () => {
    scrollToSection("pre-booking");
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e2e8f0",
          color: "#0f172a",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: 68,
                md: 76,
              },
              justifyContent: "space-between",
            }}
          >
            {/* LOGO / BRAND */}

            <Box
              onClick={() => scrollToSection("home")}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 1.2,
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #1565C0, #0D47A1)",
                  color: "#ffffff",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  boxShadow:
                    "0 6px 18px rgba(21,101,192,0.22)",
                }}
              >
                S
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    lineHeight: 1,
                    color: "#0f172a",
                  }}
                >
                  Skyline
                </Typography>

                <Typography
                  sx={{
                    mt: 0.3,
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    color: "#64748b",
                  }}
                >
                  PREMIUM PG
                </Typography>
              </Box>
            </Box>

            {/* DESKTOP MENU */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
                alignItems: "center",
                gap: 0.3,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  sx={{
                    px: 1.15,
                    color: "#475569",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    textTransform: "none",
                    borderRadius: 2,

                    "&:hover": {
                      color: "#1565C0",
                      backgroundColor: "#eff6ff",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* DESKTOP CTA */}

            <Button
              variant="contained"
              onClick={handleBooking}
              endIcon={<ArrowForwardIcon />}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                ml: 2,
                px: 2.3,
                py: 1.2,
                borderRadius: 2.5,
                backgroundColor: "#1565C0",
                textTransform: "none",
                fontWeight: 800,
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#0D47A1",
                  boxShadow: "none",
                },
              }}
            >
              Check Availability
            </Button>

            {/* MOBILE MENU BUTTON */}

            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  lg: "none",
                },
                color: "#0f172a",
                border: "1px solid #e2e8f0",
                borderRadius: 2,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: {
              xs: "85%",
              sm: 360,
            },
            maxWidth: 360,
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* DRAWER HEADER */}

          <Box
            sx={{
              px: 2.5,
              py: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            <Box>
              <Typography
                fontWeight={900}
                fontSize="1.15rem"
              >
                Skyline PG
              </Typography>

              <Typography
                fontSize="0.72rem"
                color="text.secondary"
              >
                Comfortable. Clean. Convenient.
              </Typography>
            </Box>

            <IconButton
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* MENU */}

          <List sx={{ px: 1.5, py: 2 }}>
            {menuItems.map((item) => (
              <ListItem
                key={item.id}
                disablePadding
                sx={{ mb: 0.5 }}
              >
                <ListItemButton
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  sx={{
                    borderRadius: 2,
                    py: 1.3,

                    "&:hover": {
                      backgroundColor: "#eff6ff",
                      color: "#1565C0",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: 700,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ px: 2.5 }}>
            <Divider />

            <Button
              fullWidth
              variant="contained"
              onClick={handleBooking}
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: 2.5,
                backgroundColor: "#1565C0",
                textTransform: "none",
                fontWeight: 800,
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#0D47A1",
                  boxShadow: "none",
                },
              }}
            >
              Check Availability
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;