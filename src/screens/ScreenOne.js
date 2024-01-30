import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import appBtn from "../assets/appBtn.png";
import img from "../assets/home.png";
import appleIcon from "../assets/appleIcon.png";
import googleIcon from "../assets/googleIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import HomeIcon from "../assets/homeIcon.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Loader from "./Loader";
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
    "@media (max-width: 480px)": {
      marginLeft: "0% !important",
      width: "100% !important",
      fontSize: "10px !important",
    },
    "@media (max-width: 768px)": {
      marginLeft: "0% !important",
      width: "100% !important",
      fontSize: "12px !important",
    },
  },
  typoOne: {
    fontWeight: 600,
    color: "#fff !important",
    fontSize: "35px !important",
  },
  typoTwo: {
    textAlign: "center !important",
    mt: "10px !important",
    color: "#fff !important",
    fontSize: "15px !important",
    padding: " 8px 45px 8px 45px !important",
    fontFamily: " Poppins !important",
    fontWeight: 500,
    lineHeight: "23px !important",
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
  innerContainer: {
    position: "absolute !important",
    width: 400,
    bgcolor: "background.paper !important",
    border: "1px solid #fff !important",
    boxShadow: "24 !important",
    padding: "10px !important",
    top: "54% !important",
    left: "50% !important",
    transform: "translate(-50%, -50%) !important",
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    background: "transparent !important",
    borderRadius: "10px !important",
    [theme.breakpoints.down("xs")]: {
      width: 360,
      border: "0px solid #fff !important",
      "& button": { display: "none" },
    },
    "@media (max-width: 768px)": {
      /* Adjust styles for screens up to 768px wide */
      width: "300px",
      // padding: "20px",
      /* Add more responsive styles as needed */
    },

    "@media (max-width: 480px)": {
      /* Adjust styles for screens up to 480px wide */
      width: "250px",
      padding: "20px",
      /* Add more responsive styles as needed */
    },
  },
  pText: {
    color: "white !important",
    padding: "0px !important",
    fontFamily: " Poppins !important",
    fontSize: "15px !important",
    fontWeight: 700,
    lineHeight: "23px !important",
    letterSpacing: "0em !important",
  },
}));
const ScreenOne = ({ isDisabled }) => {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const handleClose = () => {
    // setButtonVisibility(true);
  };
  const handleConnectClick = (provider) => {
    if (!isLoading && provider !== selectedProvider) {
      setIsLoading(true);

      // Simulate an asynchronous operation (e.g., API call) before navigation
      setTimeout(() => {
        setSelectedProvider(provider);
        setIsLoading(false);
        navigate("/screen-two");
      }, 1000);
    }
  };
  const renderConnectButton = (provider, label, icon) => (
    <Button
      variant="outlined"
      className={classes.btn}
      fullWidth
      onClick={() => handleConnectClick(provider)}
      disabled={isLoading || selectedProvider === provider}
    >
      <img src={icon} alt="" style={{ marginRight: "12px" }} />
      {label}
    </Button>
  );

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <Box className={classes.innerContainer}>
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

        <img
          src={HomeIcon}
          alt=""
          style={{ marginTop: "-20px", width: "100px", height: "40px" }}
        />
        <Typography className={classes.typoOne}>GET STARTED</Typography>
        <Typography variant="h6" className={classes.typoTwo}>
          By clicking Log in, You agree to our terms. Learn how we process your
          data in our Privacy Policy and cookie policy.
        </Typography>

        <Grid container spacing={2} sx={{ padding: "0 30px 5px 30px" }}>
          <Grid item xs={12} className={classes.btnContainer}>
            {renderConnectButton("apple", "Connect with Apple", appleIcon)}
          </Grid>
          <Grid item xs={12} className={classes.btnContainer}>
            {renderConnectButton("google", "Connect with Google", googleIcon)}
          </Grid>
          <Grid item xs={12} className={classes.btnContainer}>
            {renderConnectButton(
              "facebook",
              "Connect with Facebook",
              facebookIcon
            )}
          </Grid>
        </Grid>
        <p className={classes.pText}>Trouble Getting log in ?</p>
        <p className={classes.pText} style={{ marginTop: "-10px" }}>
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
    );
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
        <img src={HomeIcon} alt="" style={{ width: "125px", height: "50px" }} />
      </Box>
      {renderContent()}
    </Container>
  );
};

export default ScreenOne;
