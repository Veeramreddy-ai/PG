import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // =====================================================
  // LOGIN
  // =====================================================

  const handleLogin = async (event) => {
    event.preventDefault();

    setError("");

    if (!username.trim() || !password) {
      setError(
        "Please enter username and password."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/api/admin/login`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            username:
              username.trim(),
            password,
          }),
        }
      );

      const data =
        await response.json();

      console.log(
        "🔐 Login response:",
        data
      );

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Invalid admin credentials."
        );
      }

      // =================================================
      // SAVE TOKEN
      // =================================================

      if (!data.token) {
        throw new Error(
          "Login successful, but authentication token was not received."
        );
      }

      localStorage.setItem(
        "adminToken",
        data.token
      );

      console.log(
        "✅ Admin token saved"
      );

      // =================================================
      // GO TO DASHBOARD
      // =================================================

      navigate("/admin", {
        replace: true,
      });

    } catch (error) {
      console.error(
        "❌ Admin login error:",
        error
      );

      setError(
        error.message ||
          "Unable to login."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #eaf2fb 100%)",
        px: 2,
      }}
    >
      <Container
        maxWidth="sm"
      >
        <Paper
          elevation={0}
          sx={{
            maxWidth: 460,
            mx: "auto",
            p: {
              xs: 3,
              sm: 5,
            },
            borderRadius: 4,
            border:
              "1px solid #e2e8f0",
          }}
        >
          {/* LOGO / TITLE */}

          <Box
            sx={{
              textAlign: "center",
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                mx: "auto",
                mb: 2,
                borderRadius: 3,
                background:
                  "#eff6ff",
                color: "#1565C0",
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
              }}
            >
              <LockIcon
                sx={{
                  fontSize: 32,
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#1565C0",
                fontWeight: 900,
                fontSize:
                  "0.78rem",
                letterSpacing: 2,
              }}
            >
              SKYLINE PG
            </Typography>

            <Typography
              sx={{
                mt: 1,
                fontSize:
                  "2rem",
                fontWeight: 900,
                color:
                  "#0f172a",
              }}
            >
              Admin Login
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color:
                  "#64748b",
              }}
            >
              Sign in to manage
              booking enquiries.
            </Typography>
          </Box>

          {/* ERROR */}

          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 3,
                borderRadius: 2,
              }}
              onClose={() =>
                setError("")
              }
            >
              {error}
            </Alert>
          )}

          {/* LOGIN FORM */}

          <Box
            component="form"
            onSubmit={
              handleLogin
            }
          >
            <TextField
              fullWidth
              label="Username"
              value={username}
              onChange={(event) =>
                setUsername(
                  event.target.value
                )
              }
              disabled={loading}
              autoComplete="username"
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root":
                  {
                    borderRadius: 2.5,
                  },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
              disabled={loading}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(
                          (previous) =>
                            !previous
                        )
                      }
                      edge="end"
                      disabled={
                        loading
                      }
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root":
                  {
                    borderRadius: 2.5,
                  },
              }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                py: 1.5,
                borderRadius: 2.5,
                background:
                  "#1565C0",
                textTransform:
                  "none",
                fontWeight: 800,
                fontSize:
                  "1rem",
                "&:hover": {
                  background:
                    "#0D47A1",
                },
              }}
            >
              {loading ? (
                <>
                  <CircularProgress
                    size={20}
                    color="inherit"
                    sx={{
                      mr: 1,
                    }}
                  />
                  Signing in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AdminLogin;