import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import img from "../assets/valentine-s-day.png";
import Button from "@mui/material/Button";
const useStyles = makeStyles((theme) => ({}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh", // Set your preferred height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      loading="lazy"
    >
      <Button
        variant="contained"
        size="small"
        href="/home"
        sx={{ fontSize: "20px", padding: "5px", background: "#e86350e8" }}
      >
        Create Account
      </Button>
    </div>
  );
};

export default LandingPage;
