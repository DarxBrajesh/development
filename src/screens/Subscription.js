import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Brightness7Icon from "@mui/icons-material/Brightness7";
const useStyles = makeStyles({
  cardStyle: {
    // background: "linear-gradient(315deg, #6daddb 0%, #313131 74%)",
    border: 0,
    // backgroundColor: '#6daddb',
    borderRadius: 3,
    color: "white",
    height: 110,
    padding: "0 30px",
    marginBottom: "40px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
    wordWrap: "break-word",
    whiteSpace: "normal",
  },
  boxStyle: {
    padding: "0 30px",
    borderRadius: 2,
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Subscription({ sendDataToParent }) {
  const classes = useStyles();
  const [childData, setChildData] = useState("");

  const DataToParentOnClick = () => {
    sendDataToParent(childData);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box className={classes.boxStyle}>
          <Paper
            elevation={6}
            className={classes.cardStyle}
            sx={{ mt: 3 }}
            onClick={() => {
              setChildData("Platinum");
              DataToParentOnClick();
            }}
          >
            <Box>
              <p>
                Luvsi
                <span
                  style={{
                    background: "grey",
                    color: "white",
                    marginLeft: "5px",
                    padding: "5px",
                  }}
                >
                  Platinum
                </span>
              </p>
              <p>Level up every action you take on Luvsi</p>
            </Box>
          </Paper>
          <Paper
            elevation={6}
            className={classes.cardStyle}
            onClick={() => {
              setChildData("Gold");
              DataToParentOnClick();
            }}
          >
            <Box>
              <p>
                Luvsi
                <span
                  style={{
                    background: "#FFD700",
                    color: "white",
                    marginLeft: "5px",
                    padding: "5px",
                  }}
                >
                  Gold
                </span>
              </p>
              <p>See Who Likes You & More</p>
            </Box>
          </Paper>
          <Paper
            elevation={6}
            className={classes.cardStyle}
            onClick={() => {
              setChildData("Plus");
              DataToParentOnClick();
            }}
          >
            <Box>
              <p>Luvsi</p>
              <p>Unlimited Likes & More</p>
            </Box>
          </Paper>
          <Paper elevation={6} className={classes.cardStyle}>
            <Box>
              <p>Luvsi</p>
              <p>Subscribe to Tinder for premium features</p>
            </Box>
          </Paper>
        </Box>
        <Grid container spacing={2} sx={{ p: 1, marginTop: "-50px" }}>
          <Grid item xs={6} md={6}>
            <Paper
              elevation={6}
              className={classes.cardStyle}
              sx={{ mt: 3 }}
              onClick={DataToParentOnClick}
            >
              <div style={{ display: "block" }}>
                <Brightness7Icon
                  color="success"
                  sx={{ fontSize: "40px", marginTop: "-20px" }}
                />
                <p style={{ lineHeight: "0" }}>0 remaining</p>
                <p style={{ color: "#00a152" }}>Get More Boosts</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} md={6}>
            <Paper
              elevation={6}
              className={classes.cardStyle}
              sx={{ mt: 3, d: "block" }}
            >
              <div style={{ display: "block" }}>
                <Brightness7Icon
                  color="secondary"
                  sx={{ fontSize: "40px", marginTop: "-20px" }}
                />
                <p style={{ lineHeight: "0" }}>0 remaining</p>
                <p style={{ color: "#9c27b0" }}>Get More Super Likes</p>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Box className={classes.boxStyle} sx={{ marginTop: "-20px" }}>
          <Paper elevation={6} className={classes.cardStyle}>
            <Box>
              <VisibilityOffIcon sx={{ mt: 2 }} />
              <p>Go Incognito</p>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Subscription;
