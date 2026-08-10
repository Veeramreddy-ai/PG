import {
  Box,
  Container,
  Typography,
  Grid,
  Dialog,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
    title: "Comfortable Living Area",
    category: "Common Area",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=90",
    title: "Modern Room",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=90",
    title: "Well Maintained Room",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=90",
    title: "Dining Area",
    category: "Food & Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90",
    title: "Fresh Food",
    category: "Food & Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90",
    title: "Clean Interior",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
    title: "Comfortable Space",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90",
    title: "Peaceful Environment",
    category: "Common Area",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box
      id="gallery"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
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
            GALLERY
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
            Take a Look
            <br />
            <Box
              component="span"
              sx={{ color: "#1565C0" }}
            >
              Around Skyline PG
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
            Explore our rooms, common areas, dining spaces
            and the comfortable environment at Skyline PG.
          </Typography>
        </Box>

        {/* GALLERY GRID */}
        <Grid
          container
          spacing={{ xs: 1.5, md: 2 }}
        >
          {galleryImages.map((image, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: index === 0 || index === 5 ? 6 : 3,
              }}
              key={image.src}
            >
              <Box
                onClick={() => setSelectedImage(image)}
                sx={{
                  position: "relative",
                  height: {
                    xs: 260,
                    sm: 300,
                    md:
                      index === 0 || index === 5
                        ? 360
                        : 300,
                  },
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundColor: "#e2e8f0",
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition:
                      "transform 0.5s ease",
                  }}
                />

                {/* OVERLAY */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 2.5,

                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.8), transparent 60%)",

                    opacity: 0,
                    transition: "opacity 0.3s ease",

                    "&:hover": {
                      opacity: 1,
                    },

                    "&:hover img": {
                      transform: "scale(1.06)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "1rem",
                    }}
                  >
                    {image.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "0.8rem",
                      mt: 0.4,
                    }}
                  >
                    {image.category}
                  </Typography>

                  <Box
                    sx={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        "rgba(255,255,255,0.92)",
                      color: "#1565C0",
                    }}
                  >
                    <ZoomInIcon />
                  </Box>
                </Box>

                {/* MOBILE LABEL */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 12,
                    right: 12,
                    bottom: 12,
                    display: {
                      xs: "block",
                      md: "none",
                    },
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor:
                      "rgba(15,23,42,0.7)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Typography
                    color="#ffffff"
                    fontWeight={700}
                    fontSize="0.85rem"
                  >
                    {image.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* BOTTOM NOTE */}
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
            More photos will be added as our gallery grows.
          </Typography>
        </Box>

      </Container>

      {/* IMAGE PREVIEW DIALOG */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#0f172a",
            borderRadius: 3,
            overflow: "hidden",
          },
        }}
      >
        {selectedImage && (
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={() => setSelectedImage(null)}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 2,
                color: "#ffffff",
                backgroundColor:
                  "rgba(15,23,42,0.65)",

                "&:hover": {
                  backgroundColor:
                    "rgba(15,23,42,0.9)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              component="img"
              src={selectedImage.src}
              alt={selectedImage.title}
              sx={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                display: "block",
              }}
            />

            <Box sx={{ p: 2.5 }}>
              <Typography
                color="#ffffff"
                fontWeight={800}
              >
                {selectedImage.title}
              </Typography>

              <Typography
                color="rgba(255,255,255,0.65)"
                fontSize="0.85rem"
                mt={0.5}
              >
                {selectedImage.category}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default Gallery;