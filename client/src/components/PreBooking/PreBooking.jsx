import { useEffect, useState } from "react";

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const PreBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    room: "",
    moveInDate: "",
  });

  // Room card nundi selected room receive cheyyadam
  useEffect(() => {
    const handleRoomSelection = (event) => {
      const room = event.detail;

      setFormData((prev) => ({
        ...prev,
        room: room.title,
      }));
    };

    window.addEventListener("selectRoom", handleRoomSelection);

    return () => {
      window.removeEventListener(
        "selectRoom",
        handleRoomSelection
      );
    };
  }, []);

  // Form changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Pre-booking enquiry:", formData);

    alert(
      `Availability enquiry submitted for ${formData.room}`
    );
  };

  return (
    <Box
      id="booking"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 720,
            mx: "auto",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Typography
            sx={{
              color: "#1565C0",
              fontWeight: 800,
              letterSpacing: 2,
              fontSize: "0.85rem",
              mb: 1.5,
            }}
          >
            PRE-BOOKING
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#0f172a",
              fontSize: {
                xs: "2.2rem",
                sm: "2.8rem",
                md: "3.4rem",
              },
              lineHeight: 1.15,
            }}
          >
            Check Room Availability
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#64748b",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            Select your preferred room and move-in date.
            Send us your details and we will get back to you
            regarding availability.
          </Typography>
        </Box>

        {/* FORM CARD */}
        <Paper
          elevation={0}
          sx={{
            maxWidth: 900,
            mx: "auto",
            p: {
              xs: 3,
              sm: 4,
              md: 5,
            },
            borderRadius: 4,
            border: "1px solid #e2e8f0",
            background: "#ffffff",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2.5}>

              {/* NAME */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              {/* PHONE */}
              <Grid size={{ xs: 12, sm: 6 }}>
  <TextField
    label="Phone Number"
    name="phone"
    type="tel"
    value={formData.phone}
    onChange={handleChange}
    fullWidth
    required
  />
</Grid>

              {/* EMAIL */}
              <Grid size={{ xs: 12, sm: 6 }}>
  <TextField
    label="Email Address"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    fullWidth
    required
  />
</Grid>

              {/* ROOM */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  select
                  label="Select Room"
                  name="room"
                  value={formData.room}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  <MenuItem value="">
                    Select a room
                  </MenuItem>

                  <MenuItem value="1 Bed AC Room">
                    1 Bed AC Room
                  </MenuItem>

                  <MenuItem value="2 Bed AC Room">
                    2 Bed AC Room
                  </MenuItem>

                  <MenuItem value="3 Bed AC Room">
                    3 Bed AC Room
                  </MenuItem>

                  <MenuItem value="1 Bed Non-AC Room">
                    1 Bed Non-AC Room
                  </MenuItem>

                  <MenuItem value="2 Bed Non-AC Room">
                    2 Bed Non-AC Room
                  </MenuItem>

                  <MenuItem value="3 Bed Non-AC Room">
                    3 Bed Non-AC Room
                  </MenuItem>
                </TextField>
              </Grid>

              {/* MOVE-IN DATE */}
              <Grid size={{ xs: 12, sm: 6 }}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label="Preferred Move-in Date"
      format="MM/DD/YYYY"
      value={
        formData.moveInDate
          ? dayjs(formData.moveInDate)
          : null
      }
      onChange={(newValue) => {
        setFormData((prev) => ({
          ...prev,
          moveInDate: newValue
            ? newValue.format("YYYY-MM-DD")
            : "",
        }));
      }}
      minDate={dayjs()}
      
    />
  </LocalizationProvider>
</Grid>

              {/* SUBMIT */}
              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 1,
                    py: 1.6,
                    borderRadius: 2.5,
                    fontWeight: 800,
                    background: "#1565C0",

                    "&:hover": {
                      background: "#0D47A1",
                    },
                  }}
                >
                  Check Availability
                </Button>
              </Grid>

            </Grid>
          </Box>
        </Paper>

      </Container>
    </Box>
  );
};

export default PreBooking;