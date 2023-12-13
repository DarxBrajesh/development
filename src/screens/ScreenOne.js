import React, { useState } from "react";
import { Box, Button, Container, Grid, Modal, Typography } from "@mui/material";
import appBtn from "../assets/appBtn.png";
import img from "../assets/home.png";
import appleIcon from "../assets/appleIcon.png";
import googleIcon from "../assets/googleIcon.png";
import facebookIcon from "../assets/facebookIcon.png";

import { makeStyles } from "@material-ui/core";
import HomeIcon from "../assets/homeIcon.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
const useStyles = makeStyles((theme) => ({
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    // display: "flex",
    textAlign: "center",
    // border: "2px solid blue",
  },
  btn: {
    background: "transparent !important",
    color: "white !important",
    borderRadius: "10px !important",
    marginTop: "5px !important",
    padding: "10px !important",
    fontSize: "15px !important",
    border: "1px solid white !important",
    width: "300px !important",
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
    color: "white !important",
    borderRadius: "10px",
    width: "25%",
    textTransform: "none",
    borderColor: "white",
    "& label.Mui-focused": {
      color: "white !important",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
      "& .MuiInputLabel-root.Mui-focused ": {
        color: "white !important",
      },
    },
  },
  disabledTab: {
    pointerEvents: "none !important",
    filter: "blur(4px) !important",
    opacity: 0.2,
    background: "white",
    width: "90%",
    marginTop: "-55px",
    height: "45px",
    pointer: "none",
    marginLeft: "10%",
  },
}));
const ScreenOne = ({ isDisabled }) => {
  let navigate = useNavigate();
  const classes = useStyles();
  const isTabDisabled = true;
  const [login, setLogin] = useState(false);
  const handleClose = () => {
    // setButtonVisibility(true);
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
      <Box
        sx={{ display: "flex", flexDirection: "column" }}
        // className={classes.disabledTab}
      >
        <Header
          style={
            true
              ? {
                  filter: "blur(4px) !important",
                  pointerEvents: "none !important",
                  opacity: 0.2,
                  background: "blue !important",
                  width: "100%",
                }
              : ""
          }
          disabled="true"
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "background.paper",
          border: "1px solid #fff",
          boxShadow: 24,
          p: 2,
          top: "54%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "transparent",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "400px",
            backgroundColor: "transparent",
          }}
        >
          <button
            onClick={handleClose}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "25px",
            }}
          >
            X
          </button>
        </div>

        <img src={HomeIcon} alt="" style={{ marginTop: "-20px" }} />
        <Typography sx={{ fontWeight: 600, color: "#fff", fontSize: "35px" }}>
          GET STARTED
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mt: "10px",
            color: "#fff",
            fontSize: "15px",
            padding: " 8px 45px 8px 45px",
            fontFamily: " Poppins",
            fontWeight: 500,
            lineHeight: "23px",
          }}
        >
          By clicking Log in, You agree to our terms. Learn how we process your
          data in our Privacy Policy and cookie policy.
        </Typography>

        <Grid container spacing={2} sx={{ padding: "0 30px 5px 30px" }}>
          <Grid item xs={12} className={classes.btnContainer}>
            <Button
              variant="outlined"
              className={classes.btn}
              fullWidth
              href="/screen-two"
            >
              <img src={appleIcon} alt="" style={{ marginRight: "12px" }} />{" "}
              Connect with Apple
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.btnContainer}>
            <Button
              fullWidth
              variant="outlined"
              className={classes.btn}
              href="/screen-two"
            >
              <img src={googleIcon} alt="" style={{ marginRight: "12px" }} />{" "}
              Connect with Google
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.btnContainer}>
            <Button
              fullWidth
              href="/screen-two"
              variant="outlined"
              className={classes.btn}
              // sx={{ marginTop: "10px", padding: "10px", fontSize: "15px" }}
            >
              <img src={facebookIcon} alt="" style={{ marginRight: "12px" }} />
              Connect with Facebook
            </Button>
          </Grid>
        </Grid>
        <p
          style={{
            color: "white",
            padding: "10px 0 0 0",
            fontFamily: " Poppins",
            fontSize: "15px",
            fontWeight: 700,
            lineHeight: "23px",
            letterSpacing: "0em",
            // text-align: left;

            margin: 0,
          }}
        >
          Trouble Getting log in ?
        </p>
        <p
          style={{
            color: "white",
            padding: "0px",
            fontFamily: " Poppins",
            fontSize: "15px",
            fontWeight: 700,
            lineHeight: "23px",
            letterSpacing: "0em",
          }}
        >
          Get the app!
        </p>
        <button
          style={{
            background: "transparent",
            border: "none",
            height: "46px",
            margin: 0,
          }}
        >
          <img
            src={appBtn}
            alt=""
            style={{ height: "85px", width: "100px", marginTop: "-30px" }}
          />
        </button>
      </Box>
    </Container>
  );
};

export default ScreenOne;
