import { Box, Container, Typography, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#0f172a",
        color: "#fff",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          fontWeight={800}
          color="#60a5fa"
          mb={1}
        >
          Skyline PG
        </Typography>

        <Typography
          sx={{
            color: "#94a3b8",
            maxWidth: 600,
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          Comfortable rooms, hygienic food, reliable Wi-Fi and a
          peaceful environment for students and working professionals.
        </Typography>

        <Divider sx={{ borderColor: "#334155", mb: 3 }} />

        <Typography
          sx={{
            color: "#64748b",
            textAlign: "center",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} Skyline PG. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;