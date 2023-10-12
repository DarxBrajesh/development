import {
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  cardStyle: {
    background: "linear-gradient(45deg, #fed600, white)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: "20vh",
    width: "100%",
    padding: "0 30px",
    marginBottom: "20px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  cardSelected: {
    background: "linear-gradient(45deg, #e02de0, #afdc1d)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: "20vh",
    width: "100%",
    padding: "0 30px",
    marginBottom: "20px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  boxStyle: {
    padding: "0 30px",
    backgroundColor: "#6daddb",
    borderRadius: 2,
    display: "block",
    alignItems: "center",
    marginBottom: "20px",
    justifyContent: "center",
  },
  radioButton: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
});
const GoldSubscription = () => {
  const [isSelected, SetIsSelected] = useState("");
  const classes = useStyles();
  const handleRadioChange = (event) => {
    SetIsSelected(event.target.value);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <div
          style={{
            background: "linear-gradient(45deg, #fed600, white)",
            padding: "20px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2>
            luvsi<span>Gold</span>
          </h2>
        </div>
        <div
          style={{
            marginTop: "40px",
            padding: "10px",
            border: "1px solid #fed600",
            borderRadius: "5px",
            position: "relative",
          }}
        >
          <span
            style={{
              marginTop: "-25px",
              position: "absolute",
              background: "#fed600",
              color: "white",
              padding: "4px",
              borderRadius: "5px",
              marginLeft: "40%",
            }}
          >
            Upgrade Your Likes
          </span>
          <ul>
            <li>Unlimited Likes</li>
            <li>See Who Likes You</li>
            <li>Priority Likes</li>
            <span>Your Likes will be seen sooner with Priority Likes</span>
          </ul>
        </div>
        <div
          style={{
            marginTop: "40px",
            padding: "10px",
            border: "1px solid #fed600",
            borderRadius: "5px",
            position: "relative",
          }}
        >
          <span
            style={{
              marginTop: "-25px",
              position: "absolute",
              background: "#fed600",
              color: "white",
              padding: "4px",
              borderRadius: "5px",
              marginLeft: "38%",
            }}
          >
            Enhance Your experience
          </span>
          <ul>
            <li>Unlimited Rewinds</li>
            <li>1 Free Boost per month</li>
            <li>5 Free Super Likes per week </li>
            <li>Message Before Matching</li>
            <span>add a note to your Super Likes.</span>
          </ul>
        </div>
        <div
          style={{
            marginTop: "40px",
            paddingLeft: "30px",
            border: "1px solid #fed600",
            borderRadius: "5px",
            position: "relative",
          }}
        >
          <span
            style={{
              marginTop: "-20px",
              position: "absolute",
              background: "#fed600",
              color: "white",
              padding: "4px",
              borderRadius: "5px",
              marginLeft: "38%",
            }}
          >
            Premium Discovery
          </span>
          <h3>Passport</h3>
          <p>Match and chat with people anywhere in the world</p>
        </div>
        <div
          style={{
            marginTop: "40px",
            paddingLeft: "30px",
            border: "1px solid #fed600",
            borderRadius: "5px",
            position: "relative",
          }}
        >
          <span
            style={{
              marginTop: "-20px",
              position: "absolute",
              background: "#fed600",
              color: "white",
              padding: "4px",
              borderRadius: "5px",
              marginLeft: "42%",
            }}
          >
            Take Control
          </span>
          <h3>Control Your Profile</h3>
          <p>only show what you want them to know.</p>
          <h3>Control Who Sees You</h3>
          <p>Manage who you're seen by</p>
          <h3>Control Who You See</h3>
          <p>Choose the type of people you want to connect with</p>
          <h3>Hide Ads</h3>
        </div>
      </Grid>
      <Grid
        item
        xs={5}
        style={{
          // border: "2px solid green",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Get Luvsi Gold</h1>
          <p>A First Class Dating Experience</p>
        </div>
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={12}>
            <FormControl style={{ width: "100%" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="1month"
                name="month"
                onChange={handleRadioChange}
              >
                <Paper
                  elevation={6}
                  className={
                    isSelected === "1month"
                      ? classes.cardSelected
                      : classes.cardStyle
                  }
                >
                  <Grid container>
                    <Grid item xs={6} className={classes.radioButton}>
                      <FormControlLabel
                        value="1month"
                        control={<Radio />}
                        label=""
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <div>
                        <h3>1 month</h3>
                        <h4>355 rs.</h4>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper
                  elevation={6}
                  className={
                    isSelected === "6month"
                      ? classes.cardSelected
                      : classes.cardStyle
                  }
                >
                  <Grid container>
                    <Grid item xs={6} className={classes.radioButton}>
                      <FormControlLabel
                        value="6month"
                        control={<Radio />}
                        label=""
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        <h3>6 month</h3>
                        <h4>555 rs.</h4>
                        <h5>save 50%</h5>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper
                  elevation={6}
                  className={
                    isSelected === "12month"
                      ? classes.cardSelected
                      : classes.cardStyle
                  }
                >
                  <Grid container>
                    <Grid item xs={6} className={classes.radioButton}>
                      <FormControlLabel
                        value="12month"
                        control={<Radio />}
                        label=""
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        <h3>12 month</h3>
                        <h4>555 rs.</h4>
                        <h5>save 50%</h5>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Button variant="contained" color="success">
          Check Out
        </Button>
        <h3>No Thanks</h3>
      </Grid>
    </Grid>
  );
};

export default GoldSubscription;
