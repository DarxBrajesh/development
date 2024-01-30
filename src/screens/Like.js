import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import HomeIcon from "../assets/Black.png";
import img from "../assets/home.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    background: `linear-gradient(93.6deg, rgba(255, 106, 131, 0.78) 39.62%, rgba(252, 106, 130, 0.26) 147.48%), linear-gradient(0deg, #FFFFFF, #FFFFFF) !important`,
    color: "white !important",
    borderRadius: "10px !important",
    marginTop: "50px !important",
    padding: "6px !important",
    fontSize: "15px !important",
    border: "1px solid rgba(255, 255, 255, 1) !important",
    width: "200px !important",
    boxShadow: "13px 13px 28px 2px rgba(243, 86, 112, 0.29)",
    textTransform: "none",

    "@media (max-width: 480px)": {
      width: "100% !important",
    },
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "80vh",
    // border: "2px solid pink",
    // background: `url(${img}) center center/cover`,
  },
  icon: {
    width: "125px",
    height: "115px",
    marginBottom: "20px",
    // marginLeft: "25%",
  },
}));

const Like = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        marginLeft: "-10%",
      }}
    >
      <Box className={classes.innerContainer}>
        <img src={HomeIcon} alt="" className={classes.icon} />
        <p
          style={{
            fontFamily: " Poppins",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "center",
            padding: "10px",
            width: "80%",
          }}
        >
          Discover Your Admirers with Luvsi
        </p>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          className={classes.btn}
        >
          Update your profile
        </Button>
      </Box>
    </Container>
  );
};

export default Like;
