import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import img from "../assets/home.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
const defaultTheme = createTheme();
const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    // Handle password reset logic here
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="false"
        style={{ backgroundImage: `url(${img})`, height: "100vh" }}
      >
        <CssBaseline />
        <Header />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            elevation={3}
            // sx={{
            //   marginTop: 4,
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   padding: 3,
            // }}
            style={{
              marginTop: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px",
              // backgroundColor: "rgba(255, 255, 255, 0.5)",
              opacity: 0.9,
              borderWidth: "2px",
              borderStyle: "dashed",
              borderColor: "#fff",
              width: "50%",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="New Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm New Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px", padding: "10px", fontSize: "15px" }}
              >
                Reset Password
              </Button>
            </Box>
          </div>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
};

export default ResetPasswordForm;
