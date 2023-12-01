import React, { useState } from "react";
import { Box, Button, Container, Grid, Modal, Typography } from "@mui/material";
import appBtn from "../assets/appBtn.png";
import img from "../assets/home2.png";

import { makeStyles } from "@material-ui/core";
import HomeIcon from "../assets/homeIcon.png";
import { Link, useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  btn: {
    background: "transparent !important",
    color: "white !important",
    borderRadius: "10px !important",
    marginTop: "5px !important",
    padding: "10px !important",
    fontSize: "15px !important",
    border: "1px solid white !important",
    width: "200px !important",
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
}));
const ScreenOne = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
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
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "background.paper",
          border: "1px solid #fff",
          boxShadow: 24,
          p: 2,
          top: "50%",
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
        <Typography sx={{ fontWeight: 500, color: "#fff", fontSize: "35px" }}>
          GET STARTED
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mt: "10px",
            color: "#fff",
            fontSize: "13px",
            padding: "10px",
          }}
        >
          by clicking Log in, You agree to our terms. Learn how we process your
          data in our Privacy Policy and cookie policy.
        </Typography>

        <Grid container spacing={2} sx={{ padding: "0 30px 5px 30px" }}>
          <Grid
            item
            xs={12}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              textAlign: "center",
            }}
          >
            <Button variant="outlined" className={classes.btn} fullWidth>
              Login with facebook
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="outlined" className={classes.btn}>
              Login with Mobile no.
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              className={classes.btn}
              // sx={{ marginTop: "10px", padding: "10px", fontSize: "15px" }}
            >
              Login with Mobile no.
            </Button>
          </Grid>
        </Grid>
        <Link style={{ color: "white", padding: "10px" }}>
          Trouble Getting log in ?
        </Link>
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
            style={{ height: "50px", marginTop: "-30px" }}
          />
        </button>
      </Box>
    </Container>
  );
};

export default ScreenOne;
