import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [selectedBooking, setSelectedBooking] =
    useState(null);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [confirmOpen, setConfirmOpen] =
    useState(false);

  const [pendingAction, setPendingAction] =
    useState(null);

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    navigate("/admin/login", {
      replace: true,
    });
  };

  // =====================================================
  // FETCH BOOKINGS
  // =====================================================

  const fetchBookings = async () => {
    try {
      setLoading(true);
      setError("");

      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        throw new Error(
          "Authentication required. Please login again."
        );
      }

      const response = await fetch(
        `${API_URL}/api/bookings`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to fetch bookings."
        );
      }

      setBookings(data.bookings || []);
    } catch (error) {
      console.error(
        "❌ Fetch bookings error:",
        error
      );

      setError(
        error.message ||
          "Unable to load bookings."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // =====================================================
  // COUNTS
  // =====================================================

  const totalCount = bookings.length;

  const pendingCount = bookings.filter(
    (booking) =>
      booking.status === "pending"
  ).length;

  const confirmedCount = bookings.filter(
    (booking) =>
      booking.status === "confirmed"
  ).length;

  const cancelledCount = bookings.filter(
    (booking) =>
      booking.status === "cancelled"
  ).length;

  // =====================================================
  // SEARCH + FILTER
  // =====================================================

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const searchText =
        search.trim().toLowerCase();

      const matchesSearch =
        !searchText ||
        booking.name
          ?.toLowerCase()
          .includes(searchText) ||
        booking.phone
          ?.toLowerCase()
          .includes(searchText) ||
        booking.email
          ?.toLowerCase()
          .includes(searchText) ||
        booking.room
          ?.toLowerCase()
          .includes(searchText);

      const currentStatus =
        booking.status || "pending";

      const matchesStatus =
        statusFilter === "all" ||
        currentStatus === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [bookings, search, statusFilter]);

  // =====================================================
  // STATUS STYLE
  // =====================================================

  const getStatusStyle = (status) => {
    switch (status) {
      case "confirmed":
        return {
          background: "#dcfce7",
          color: "#15803d",
        };

      case "cancelled":
        return {
          background: "#fee2e2",
          color: "#dc2626",
        };

      default:
        return {
          background: "#fef3c7",
          color: "#b45309",
        };
    }
  };

  // =====================================================
  // DETAILS
  // =====================================================

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
    setSelectedBooking(null);
  };

  // =====================================================
  // CONFIRMATION
  // =====================================================

  const askAction = (booking, action) => {
    setSelectedBooking(booking);
    setPendingAction(action);
    setConfirmOpen(true);
  };

  const closeConfirmation = () => {
    if (actionLoading) return;

    setConfirmOpen(false);
    setPendingAction(null);
  };

  // =====================================================
  // UPDATE STATUS
  // =====================================================

  const updateStatus = async (
    booking,
    status
  ) => {
    try {
      setActionLoading(true);
      setError("");

      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        throw new Error(
          "Authentication required. Please login again."
        );
      }

      const response = await fetch(
        `${API_URL}/api/bookings/${booking._id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to update booking."
        );
      }

      setBookings((previous) =>
        previous.map((item) =>
          item._id === booking._id
            ? {
                ...item,
                ...(data.booking || {}),
                status,
              }
            : item
        )
      );

      setSuccessMessage(
        status === "confirmed"
          ? "Booking confirmed successfully. Customer notification has been processed."
          : "Booking cancelled successfully. Customer notification has been processed."
      );

      setConfirmOpen(false);
      setDetailsOpen(false);
      setPendingAction(null);
      setSelectedBooking(null);
    } catch (error) {
      console.error(
        "❌ Update status error:",
        error
      );

      setError(
        error.message ||
          "Unable to update booking."
      );
    } finally {
      setActionLoading(false);
    }
  };

  // =====================================================
  // DELETE BOOKING
  // =====================================================

  const deleteBooking = async (booking) => {
    try {
      setActionLoading(true);
      setError("");

      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        throw new Error(
          "Authentication required. Please login again."
        );
      }

      const response = await fetch(
        `${API_URL}/api/bookings/${booking._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data =
        await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to delete booking."
        );
      }

      setBookings((previous) =>
        previous.filter(
          (item) =>
            item._id !== booking._id
        )
      );

      setSuccessMessage(
        "Booking deleted permanently."
      );

      setConfirmOpen(false);
      setDetailsOpen(false);
      setPendingAction(null);
      setSelectedBooking(null);
    } catch (error) {
      console.error(
        "❌ Delete booking error:",
        error
      );

      setError(
        error.message ||
          "Unable to delete booking."
      );
    } finally {
      setActionLoading(false);
    }
  };

  // =====================================================
  // EXECUTE ACTION
  // =====================================================

  const executeAction = async () => {
    if (
      !selectedBooking ||
      !pendingAction
    ) {
      return;
    }

    if (pendingAction === "confirm") {
      await updateStatus(
        selectedBooking,
        "confirmed"
      );
    }

    if (pendingAction === "cancel") {
      await updateStatus(
        selectedBooking,
        "cancelled"
      );
    }

    if (pendingAction === "delete") {
      await deleteBooking(
        selectedBooking
      );
    }
  };

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const formatDateTime = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  };

  // =====================================================
  // STAT CARD
  // =====================================================

  const StatCard = ({
    title,
    value,
    icon,
    background,
    color,
  }) => (
    <Paper
      elevation={0}
      sx={{
        p: {
          xs: 2.2,
          md: 2.8,
        },
        borderRadius: 3,
        border: "1px solid #e2e8f0",
        height: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <Stack
        direction="row"
        spacing={1.8}
        alignItems="center"
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: 2.2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background,
            color,
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography
            sx={{
              color: "#64748b",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: 0.6,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: 0.2,
              fontSize: "1.75rem",
              fontWeight: 900,
              color: "#0f172a",
              lineHeight: 1.1,
            }}
          >
            {value}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
      {/* =================================================
          ADMIN NAVBAR
      ================================================= */}

      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              height: {
                xs: 60,
                md: 64,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* BRAND */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.1,
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #1565C0, #0D47A1)",
                  color: "#ffffff",
                  fontWeight: 900,
                  fontSize: "1rem",
                  boxShadow:
                    "0 5px 14px rgba(21,101,192,0.18)",
                }}
              >
                S
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "1rem",
                    lineHeight: 1,
                    color: "#0f172a",
                  }}
                >
                  Skyline
                </Typography>

                <Typography
                  sx={{
                    mt: 0.25,
                    fontSize: "0.57rem",
                    fontWeight: 800,
                    letterSpacing: 1.3,
                    color: "#64748b",
                  }}
                >
                  PREMIUM PG
                </Typography>
              </Box>
            </Box>

            {/* ACTIONS */}

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Button
                startIcon={<HomeIcon />}
                onClick={() => navigate("/")}
                sx={{
                  height: 38,
                  px: 1.5,
                  borderRadius: 2,
                  color: "#475569",
                  textTransform: "none",
                  fontWeight: 700,

                  "&:hover": {
                    backgroundColor: "#eff6ff",
                    color: "#1565C0",
                  },
                }}
              >
                Home
              </Button>

              <Button
                variant="outlined"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                sx={{
                  height: 38,
                  px: 1.5,
                  borderRadius: 2,
                  borderColor: "#e2e8f0",
                  color: "#475569",
                  textTransform: "none",
                  fontWeight: 800,

                  "&:hover": {
                    borderColor: "#fecaca",
                    backgroundColor: "#fef2f2",
                    color: "#dc2626",
                  },
                }}
              >
                Logout
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* =================================================
          DASHBOARD CONTENT
      ================================================= */}

      <Box
        sx={{
          py: {
            xs: 2.5,
            md: 4,
          },
        }}
      >
        <Container maxWidth="xl">

          {/* HEADER */}

          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 2.5,
                md: 3.5,
              },
              mb: 2.5,
              borderRadius: 3,
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
            }}
          >
            <Stack
              direction={{
                xs: "column",
                md: "row",
              }}
              justifyContent="space-between"
              alignItems={{
                xs: "flex-start",
                md: "center",
              }}
              spacing={2}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#1565C0",
                    fontWeight: 900,
                    fontSize: "0.72rem",
                    letterSpacing: 1.8,
                  }}
                >
                  SKYLINE PG
                </Typography>

                <Typography
                  sx={{
                    mt: 0.4,
                    color: "#0f172a",
                    fontWeight: 900,
                    fontSize: {
                      xs: "1.8rem",
                      md: "2.35rem",
                    },
                    lineHeight: 1.15,
                  }}
                >
                  Admin Dashboard
                </Typography>

                <Typography
                  sx={{
                    mt: 0.5,
                    color: "#64748b",
                    fontSize: "0.9rem",
                  }}
                >
                  Manage enquiries, confirm
                  bookings and track
                  cancellations.
                </Typography>
              </Box>
            </Stack>
          </Paper>

          {/* ERROR */}

          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 2.5,
                borderRadius: 2.5,
              }}
              onClose={() => setError("")}
            >
              {error}
            </Alert>
          )}

          {/* STATISTICS */}

          <Grid
            container
            spacing={2}
            sx={{ mb: 2.5 }}
          >
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <StatCard
                title="TOTAL BOOKINGS"
                value={totalCount}
                icon={<EventAvailableIcon />}
                background="#eff6ff"
                color="#1565C0"
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <StatCard
                title="PENDING"
                value={pendingCount}
                icon={<PendingActionsIcon />}
                background="#fef3c7"
                color="#d97706"
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <StatCard
                title="CONFIRMED"
                value={confirmedCount}
                icon={<CheckCircleIcon />}
                background="#dcfce7"
                color="#16a34a"
              />
            </Grid>

            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <StatCard
                title="CANCELLED"
                value={cancelledCount}
                icon={<CancelIcon />}
                background="#fee2e2"
                color="#dc2626"
              />
            </Grid>
          </Grid>

          {/* SEARCH / FILTER */}

          <Paper
            elevation={0}
            sx={{
              p: 5,
              mb: 2.5,
              borderRadius: 3,
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
            }}
          >
            <Stack
              direction={{
                xs: "column",
                md: "row",
              }}
              spacing={1.5}
            >
              <TextField
                fullWidth
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search name, phone, email or room..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{
                          color: "#94a3b8",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2.5,
                  },
                }}
              />

              <FormControl
                sx={{
                  minWidth: {
                    xs: "100%",
                    md: 190,
                  },
                }}
              >
                <InputLabel>
                  Status
                </InputLabel>

                <Select
                  value={statusFilter}
                  label="Status"
                  onChange={(event) =>
                    setStatusFilter(
                      event.target.value
                    )
                  }
                  sx={{
                    borderRadius: 2.5,
                  }}
                >
                  <MenuItem value="all">
                    All Bookings
                  </MenuItem>

                  <MenuItem value="pending">
                    Pending
                  </MenuItem>

                  <MenuItem value="confirmed">
                    Confirmed
                  </MenuItem>

                  <MenuItem value="cancelled">
                    Cancelled
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Paper>

          {/* BOOKINGS TABLE */}

          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              border: "1px solid #e2e8f0",
              overflow: "hidden",
              backgroundColor: "#ffffff",
            }}
          >
            <Box
              sx={{
                p: {
                  xs: 2,
                  md: 2.5,
                },
              }}
            >
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                justifyContent="space-between"
                alignItems={{
                  xs: "flex-start",
                  sm: "center",
                }}
                spacing={1}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: "1.2rem",
                      color: "#0f172a",
                    }}
                  >
                    Booking Enquiries
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.3,
                      color: "#64748b",
                      fontSize: "0.85rem",
                    }}
                  >
                    Showing{" "}
                    {filteredBookings.length}{" "}
                    of {bookings.length} bookings
                  </Typography>
                </Box>

                {/* ONLY ONE REFRESH BUTTON */}

                <Button
                  variant="outlined"
                  startIcon={<RefreshIcon />}
                  onClick={fetchBookings}
                  disabled={loading}
                  sx={{
                    minWidth: 110,
                    height: 40,
                    borderRadius: 2,
                    borderColor: "#dbe3ec",
                    color: "#475569",
                    textTransform: "none",
                    fontWeight: 800,

                    "&:hover": {
                      borderColor: "#1565C0",
                      backgroundColor: "#eff6ff",
                      color: "#1565C0",
                    },
                  }}
                >
                  {loading
                    ? "Loading..."
                    : "Refresh"}
                </Button>
              </Stack>
            </Box>

            <Divider />

            {loading ? (
              <Box
                sx={{
                  minHeight: 320,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : filteredBookings.length === 0 ? (
              <Box
                sx={{
                  py: 10,
                  textAlign: "center",
                }}
              >
                <EventAvailableIcon
                  sx={{
                    fontSize: 50,
                    color: "#cbd5e1",
                  }}
                />

                <Typography
                  sx={{
                    mt: 1,
                    fontWeight: 800,
                    color: "#64748b",
                  }}
                >
                  No bookings found
                </Typography>
              </Box>
            ) : (
              <TableContainer
                sx={{
                  overflowX: "auto",
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow
                      sx={{
                        backgroundColor:
                          "#f8fafc",
                      }}
                    >
                      <TableCell
                        sx={{
                          fontWeight: 900,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Customer
                      </TableCell>

                      <TableCell
                        sx={{
                          fontWeight: 900,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Room
                      </TableCell>

                      <TableCell
                        sx={{
                          fontWeight: 900,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Move-in
                      </TableCell>

                      <TableCell
                        sx={{
                          fontWeight: 900,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Duration
                      </TableCell>

                      <TableCell
                        sx={{
                          fontWeight: 900,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Status
                      </TableCell>

                      <TableCell
                        align="right"
                        sx={{
                          fontWeight: 900,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {filteredBookings.map(
                      (booking) => {
                        const status =
                          booking.status ||
                          "pending";

                        const statusStyle =
                          getStatusStyle(
                            status
                          );

                        return (
                          <TableRow
                            key={booking._id}
                            hover
                          >
                            {/* CUSTOMER */}

                            <TableCell>
                              <Stack
                                direction="row"
                                spacing={1.5}
                                alignItems="center"
                              >
                                <Box
                                  sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius:
                                      "50%",
                                    background:
                                      "#eff6ff",
                                    color:
                                      "#1565C0",
                                    display:
                                      "flex",
                                    alignItems:
                                      "center",
                                    justifyContent:
                                      "center",
                                    flexShrink: 0,
                                  }}
                                >
                                  <PersonIcon fontSize="small" />
                                </Box>

                                <Box>
                                  <Typography
                                    sx={{
                                      fontWeight:
                                        800,
                                    }}
                                  >
                                    {
                                      booking.name
                                    }
                                  </Typography>

                                  <Typography
                                    sx={{
                                      fontSize:
                                        "0.78rem",
                                      color:
                                        "#64748b",
                                    }}
                                  >
                                    {
                                      booking.phone
                                    }
                                  </Typography>
                                </Box>
                              </Stack>
                            </TableCell>

                            {/* ROOM */}

                            <TableCell>
                              <Typography
                                sx={{
                                  fontWeight: 800,
                                  color:
                                    "#1565C0",
                                }}
                              >
                                {booking.room}
                              </Typography>
                            </TableCell>

                            {/* DATE */}

                            <TableCell>
                              <Stack
                                direction="row"
                                spacing={0.8}
                                alignItems="center"
                              >
                                <CalendarMonthIcon
                                  sx={{
                                    fontSize: 18,
                                    color:
                                      "#64748b",
                                  }}
                                />

                                <Typography
                                  sx={{
                                    whiteSpace:
                                      "nowrap",
                                  }}
                                >
                                  {formatDate(
                                    booking.date
                                  )}
                                </Typography>
                              </Stack>
                            </TableCell>

                            {/* DURATION */}

                            <TableCell>
                              {booking.duration ||
                                "-"}
                            </TableCell>

                            {/* STATUS */}

                            <TableCell>
                              <Chip
                                label={status}
                                size="small"
                                sx={{
                                  textTransform:
                                    "capitalize",
                                  fontWeight: 800,
                                  background:
                                    statusStyle.background,
                                  color:
                                    statusStyle.color,
                                  minWidth: 90,
                                }}
                              />
                            </TableCell>

                            {/* ACTIONS */}

                            <TableCell align="right">
                              <Stack
                                direction="row"
                                spacing={0.3}
                                justifyContent="flex-end"
                              >
                                <Tooltip title="View Details">
                                  <IconButton
                                    onClick={() =>
                                      handleViewDetails(
                                        booking
                                      )
                                    }
                                    sx={{
                                      color:
                                        "#1565C0",
                                    }}
                                  >
                                    <VisibilityIcon />
                                  </IconButton>
                                </Tooltip>

                                {status !==
                                  "confirmed" && (
                                  <Tooltip title="Confirm Booking">
                                    <IconButton
                                      onClick={() =>
                                        askAction(
                                          booking,
                                          "confirm"
                                        )
                                      }
                                      sx={{
                                        color:
                                          "#16a34a",
                                      }}
                                    >
                                      <CheckCircleIcon />
                                    </IconButton>
                                  </Tooltip>
                                )}

                                {status !==
                                  "cancelled" && (
                                  <Tooltip title="Cancel Booking">
                                    <IconButton
                                      onClick={() =>
                                        askAction(
                                          booking,
                                          "cancel"
                                        )
                                      }
                                      sx={{
                                        color:
                                          "#dc2626",
                                      }}
                                    >
                                      <CancelIcon />
                                    </IconButton>
                                  </Tooltip>
                                )}

                                <Tooltip title="Delete Booking">
                                  <IconButton
                                    onClick={() =>
                                      askAction(
                                        booking,
                                        "delete"
                                      )
                                    }
                                    sx={{
                                      color:
                                        "#64748b",
                                    }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </Tooltip>
                              </Stack>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        </Container>
      </Box>

      {/* =================================================
          DETAILS DIALOG
      ================================================= */}

     <Dialog
  open={detailsOpen}
  onClose={handleCloseDetails}
  fullWidth
  maxWidth="sm"
  fullScreen={false}
  PaperProps={{
    sx: {
      width: "100%",
      maxWidth: 560,
      m: { xs: 1.5, sm: 2 },
      borderRadius: { xs: 2.5, sm: 3 },
      maxHeight: "90vh",
      overflow: "hidden",
    },
  }}
>
  <DialogTitle
    sx={{
      px: { xs: 2, sm: 3 },
      py: { xs: 1.5, sm: 2 },
      fontWeight: 900,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #e2e8f0",
      flexShrink: 0,
    }}
  >
    Booking Details

    <IconButton
      onClick={handleCloseDetails}
      size="small"
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>

  <DialogContent
    dividers
    sx={{
      px: { xs: 2, sm: 3 },
      py: { xs: 2, sm: 3 },
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
    }}
  >
    {selectedBooking && (
      <Stack spacing={{ xs: 2, sm: 2.5 }}>

        {/* BOOKING ID */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontWeight: 800,
              color: "#64748b",
            }}
          >
            BOOKING ID
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              fontWeight: 700,
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              wordBreak: "break-all",
            }}
          >
            {selectedBooking._id}
          </Typography>
        </Box>

        {/* CUSTOMER */}
        <Stack direction="row" spacing={1.5}>
          <PersonIcon sx={{ color: "#1565C0" }} />

          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#64748b",
                fontWeight: 800,
              }}
            >
              CUSTOMER
            </Typography>

            <Typography fontWeight={800}>
              {selectedBooking.name || "-"}
            </Typography>
          </Box>
        </Stack>

        {/* PHONE */}
        <Stack direction="row" spacing={1.5}>
          <PhoneIcon sx={{ color: "#1565C0" }} />

          <Box>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#64748b",
                fontWeight: 800,
              }}
            >
              PHONE
            </Typography>

            <Typography fontWeight={700}>
              {selectedBooking.phone || "-"}
            </Typography>
          </Box>
        </Stack>

        {/* EMAIL */}
        <Stack direction="row" spacing={1.5}>
          <EmailIcon sx={{ color: "#1565C0" }} />

          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#64748b",
                fontWeight: 800,
              }}
            >
              EMAIL
            </Typography>

            <Typography
              fontWeight={700}
              sx={{
                wordBreak: "break-word",
              }}
            >
              {selectedBooking.email || "Not provided"}
            </Typography>
          </Box>
        </Stack>

        {/* ROOM */}
        <Stack direction="row" spacing={1.5}>
          <MeetingRoomIcon sx={{ color: "#1565C0" }} />

          <Box>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#64748b",
                fontWeight: 800,
              }}
            >
              ROOM
            </Typography>

            <Typography
              fontWeight={800}
              color="#1565C0"
            >
              {selectedBooking.room || "-"}
            </Typography>
          </Box>
        </Stack>

        {/* MOVE IN */}
        <Stack direction="row" spacing={1.5}>
          <CalendarMonthIcon sx={{ color: "#1565C0" }} />

          <Box>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#64748b",
                fontWeight: 800,
              }}
            >
              MOVE-IN DATE
            </Typography>

            <Typography fontWeight={700}>
              {formatDate(selectedBooking.date)}
            </Typography>
          </Box>
        </Stack>

        {/* DURATION */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            backgroundColor: "#f8fafc",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.7rem",
              color: "#64748b",
              fontWeight: 800,
            }}
          >
            DURATION
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              fontWeight: 700,
            }}
          >
            {selectedBooking.duration || "Not specified"}
          </Typography>
        </Box>

        {/* MESSAGE */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            backgroundColor: "#f8fafc",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.7rem",
              color: "#64748b",
              fontWeight: 800,
            }}
          >
            MESSAGE / REQUIREMENT
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#475569",
              lineHeight: 1.7,
              wordBreak: "break-word",
            }}
          >
            {selectedBooking.message ||
              "No additional requirement."}
          </Typography>
        </Box>

        {/* STATUS */}
        <Box>
          <Typography
            sx={{
              fontSize: "0.7rem",
              color: "#64748b",
              fontWeight: 800,
              mb: 1,
            }}
          >
            STATUS
          </Typography>

          <Chip
            label={selectedBooking.status || "pending"}
            sx={{
              textTransform: "capitalize",
              fontWeight: 800,
              ...getStatusStyle(
                selectedBooking.status || "pending"
              ),
            }}
          />
        </Box>

        {/* CREATED */}
        <Typography
          sx={{
            fontSize: "0.75rem",
            color: "#94a3b8",
          }}
        >
          Submitted:{" "}
          {formatDateTime(selectedBooking.createdAt)}
        </Typography>
      </Stack>
    )}
  </DialogContent>

  <DialogActions
    sx={{
      px: { xs: 2, sm: 3 },
      py: { xs: 1.5, sm: 2 },
      gap: 1,
      flexWrap: "wrap",
      borderTop: "1px solid #e2e8f0",
      flexShrink: 0,
    }}
  >
    {selectedBooking?.status !== "confirmed" && (
      <Button
        variant="contained"
        startIcon={<CheckCircleIcon />}
        onClick={() =>
          askAction(selectedBooking, "confirm")
        }
        sx={{
          background: "#16a34a",
          textTransform: "none",
          fontWeight: 800,
          borderRadius: 2,
          "&:hover": {
            background: "#15803d",
          },
        }}
      >
        Confirm
      </Button>
    )}

    {selectedBooking?.status !== "cancelled" && (
      <Button
        variant="contained"
        color="error"
        startIcon={<CancelIcon />}
        onClick={() =>
          askAction(selectedBooking, "cancel")
        }
        sx={{
          textTransform: "none",
          fontWeight: 800,
          borderRadius: 2,
        }}
      >
        Cancel
      </Button>
    )}

    <Button
      onClick={handleCloseDetails}
      sx={{
        textTransform: "none",
        fontWeight: 700,
        borderRadius: 2,
      }}
    >
      Close
    </Button>
  </DialogActions>
</Dialog>

      {/* =================================================
          CONFIRM ACTION DIALOG
      ================================================= */}

      <Dialog
        open={confirmOpen}
        onClose={closeConfirmation}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontWeight: 900,
          }}
        >
          {pendingAction === "confirm"
            ? "Confirm Booking?"
            : pendingAction === "cancel"
            ? "Cancel Booking?"
            : "Delete Booking?"}
        </DialogTitle>

        <DialogContent>
          <Typography
            sx={{
              color: "#475569",
              lineHeight: 1.7,
            }}
          >
            {pendingAction === "confirm"
              ? "This will confirm the booking and notify the customer by email."
              : pendingAction === "cancel"
              ? "This will cancel the booking and notify the customer by email."
              : "This will permanently delete this booking from the database."}
          </Typography>

          {selectedBooking && (
            <Box
              sx={{
                mt: 2,
                p: 2,
                borderRadius: 2,
                background: "#f8fafc",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                }}
              >
                {selectedBooking.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#64748b",
                }}
              >
                {selectedBooking.room}
              </Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions
          sx={{
            p: 2,
          }}
        >
          <Button
            onClick={closeConfirmation}
            disabled={actionLoading}
            sx={{
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            No, Go Back
          </Button>

          <Button
            variant="contained"
            onClick={executeAction}
            disabled={actionLoading}
            color={
              pendingAction === "confirm"
                ? "success"
                : pendingAction === "cancel"
                ? "error"
                : "inherit"
            }
            startIcon={
              actionLoading ? (
                <CircularProgress
                  size={18}
                  color="inherit"
                />
              ) : pendingAction ===
                "confirm" ? (
                <CheckCircleIcon />
              ) : pendingAction ===
                "cancel" ? (
                <CancelIcon />
              ) : (
                <DeleteIcon />
              )
            }
            sx={{
              textTransform: "none",
              fontWeight: 800,
            }}
          >
            {actionLoading
              ? "Processing..."
              : pendingAction === "confirm"
              ? "Yes, Confirm"
              : pendingAction === "cancel"
              ? "Yes, Cancel"
              : "Yes, Delete"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* =================================================
          SUCCESS SNACKBAR
      ================================================= */}

      <Snackbar
        open={Boolean(successMessage)}
        autoHideDuration={4000}
        onClose={() =>
          setSuccessMessage("")
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() =>
            setSuccessMessage("")
          }
          sx={{
            borderRadius: 2,
            fontWeight: 700,
          }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminDashboard;