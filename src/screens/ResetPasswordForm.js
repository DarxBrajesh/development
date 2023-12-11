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
import { Select, makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
const defaultTheme = createTheme();
const useStyles = makeStyles((theme) => ({
  btn: {
    background: "transparent !important",
    color: "white !important",
    borderRadius: "10px !important",
    marginTop: "5px !important",
    padding: "6px !important",
    fontSize: "15px !important",
    border: "1px solid white !important",
    width: "200px !important",
    marginLeft: "25% !important",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
  imageCard: {
    width: "100%",
    marginBottom: theme.spacing(2),
    // border: "2px solid #fff",
    background: "transparent !important",
  },
  cardContent: {
    padding: "0px !important",
    // border: "1px solid #fff",
    border: "none",
    height: "100%",
  },
  inputField: {
    color: "black !important",
    borderRadius: "12px",
    width: "25%",
    border: "none",
    background: "white",
    textTransform: "none",
    borderColor: "white",
    "& label.Mui-focused": {
      color: "white !important",
      borderRadius: "12px",
      border: "none",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderRadius: "12px",
        border: "none",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderRadius: "12px",
        border: "none",
      },
      "& .MuiInputLabel-root.Mui-focused ": {
        color: "white !important",
        borderRadius: "12px",
        border: "none",
      },
    },
  },
  genderField: {
    "& .MuiFormControlLabel-root.MuiFormControlLabel-label": {
      color: "blue !important",
    },
  },
}));

const ResetPasswordForm = () => {
  const classes = useStyles();
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
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        p: { xs: 2, sm: 5, md: 2 },
        background: `url(${img}) center center/cover`,
        minHeight: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Header />
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: 380,
          bgcolor: "background.paper",
          border: "1px solid #fff",
          boxShadow: 24,
          p: 5,
          top: "53%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "transparent",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <label style={{ color: "white" }}>New password</label>
          <TextField
            type="password"
            fullWidth
            margin="normal"
            placeholder="password"
            inputProps={{ className: classes.inputField }}
            value={password}
            onChange={handlePasswordChange}
            className={classes.inputField}
            autoComplete="password"
            size="small"
          />

          <label style={{ color: "white" }}>confirm New Password</label>
          <TextField
            margin="normal"
            fullWidth
            id="password"
            placeholder="Comfirm Password"
            name="email"
            inputProps={{ className: classes.inputField }}
            className={classes.inputField}
            size="small"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            autoComplete="password"
          />

          <Button
            // type="submit"
            fullWidth
            size="small"
            // onClick={userInformation}
            variant="outlined"
            className={classes.btn}
            href="/screen-three"
          >
            Continue
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ResetPasswordForm;
