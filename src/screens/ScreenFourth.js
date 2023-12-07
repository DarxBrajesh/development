import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import appBtn from "../assets/appBtn.png";
import img from "../assets/home.png";
import { useFormik } from "formik";
import { Select, makeStyles } from "@material-ui/core";
import HomeIcon from "../assets/homeIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { profileForm } from "../schemas";
import Header from "../components/Header";
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
const initialValues = {
  fullname: "",
  email: "",
  dob: "",
  gender: "",
  city: "",
};
const ScreenFourth = () => {
  let navigate = useNavigate();
  const [alignment, setAlignment] = React.useState("web");
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [age, setAge] = React.useState("");
  const toggaleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleClose = () => {
    setOpen(false);
    // setButtonVisibility(true);
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: profileForm,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        window.location.href = "/profilesection";
        action.resetForm();
      },
    });

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
          width: 500,
          bgcolor: "background.paper",
          border: "1px solid #fff",
          boxShadow: 24,
          p: 4,
          top: "54%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "transparent",
          borderRadius: "10px",
          overflow: "hidden",
          height: "530px",
          // border: "2px solid blue",
        }}
      >
        <div
          style={{
            overflowY: "scroll",
            WebkitOverflowScrolling: {
              width: "0px",
              display: "none",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "500px",
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
                marginTop: "-2px",
              }}
            >
              X
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "500px",
              backgroundColor: "transparent",
            }}
          >
            <p style={{ color: "white" }}>Looking for </p>
          </div>

          <ToggleButtonGroup
            value={alignment}
            exclusive={true}
            onChange={toggaleChange}
          >
            <Grid container={true} spacing={1.25}>
              {["A Relationship", "Nothing Serious", "I will find it"].map(
                (v) => (
                  <Grid key={v} item={true}>
                    <ToggleButton
                      value={v}
                      key={v}
                      sx={{
                        border: "1px solid white",
                        color: "white",
                        borderRadius: "10px",
                        textTransform: "none !important",
                        padding: "5px 18px 5px 18px",
                        fontFamily: "Poppins",
                      }}
                    >
                      {v}
                    </ToggleButton>
                  </Grid>
                )
              )}
            </Grid>
          </ToggleButtonGroup>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              textTransform: "none !important",
              width: "500px",
              backgroundColor: "transparent",
            }}
          >
            <p style={{ color: "white" }}>How tall are you?</p>
          </div>
          <div
            style={{
              alignItems: "flex-start",
              width: "500px",
              backgroundColor: "transparent",
            }}
          >
            <FormControl
              sx={{
                m: 1,
                minWidth: 140,
                background: "white",
                padding: "0px 10px 0px 10px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
              size="small"
            >
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  border: "none",
                  background: "white",
                  borderRadius: "10px",
                  paddingLeft: "12px",
                }}
              >
                <MenuItem value="">
                  <em>5</em>
                </MenuItem>
                <MenuItem value={5.5}>5.5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={6.5}>6.5</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "500px",
              backgroundColor: "transparent",
            }}
          >
            <p style={{ color: "white" }}>What excercise is your habit? </p>
          </div>

          <ToggleButtonGroup
            value={alignment}
            exclusive={true}
            onChange={toggaleChange}
          >
            <Grid container={true} spacing={1.25}>
              {[
                "Occasional Excercise",
                "Enough Cardio",
                "All Excercise all time",
              ].map((v) => (
                <Grid key={v} item={true}>
                  <ToggleButton
                    value={v}
                    key={v}
                    sx={{
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "10px",
                      textTransform: "none !important",
                      padding: "5px 18px 5px 18px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {v}
                  </ToggleButton>
                </Grid>
              ))}
            </Grid>
          </ToggleButtonGroup>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "500px",
              backgroundColor: "transparent",
            }}
          >
            <p style={{ color: "white" }}>
              Which answer best describe your cooking skills?
            </p>
          </div>

          <ToggleButtonGroup
            value={alignment}
            exclusive={true}
            onChange={toggaleChange}
          >
            <Grid container={true} spacing={1.25}>
              {[
                "I’m a microwave master",
                "I’m a delivery expert",
                "I know few good recepie",
                "Im an excellent chef",
              ].map((v) => (
                <Grid key={v} item={true}>
                  <ToggleButton
                    value={v}
                    key={v}
                    sx={{
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "10px",
                      textTransform: "none !important",
                      padding: "5px 18px 5px 18px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {v}
                  </ToggleButton>
                </Grid>
              ))}
            </Grid>
          </ToggleButtonGroup>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "500px",
              backgroundColor: "transparent",
            }}
          >
            <p style={{ color: "white" }}>Your Ideal Vaccation </p>
          </div>

          <ToggleButtonGroup
            value={alignment}
            exclusive={true}
            onChange={toggaleChange}
          >
            <Grid container={true} spacing={1.25}>
              {[
                "Hiking & Backpack",
                "Deck hair & Sunscreen",
                "Museum & Postcards",
              ].map((v) => (
                <Grid key={v} item={true}>
                  <ToggleButton
                    value={v}
                    key={v}
                    sx={{
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "10px",
                      textTransform: "none !important",
                      padding: "5px 18px 5px 18px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {v}
                  </ToggleButton>
                </Grid>
              ))}
            </Grid>
          </ToggleButtonGroup>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "500px",
              backgroundColor: "transparent",
            }}
          >
            <p style={{ color: "white" }}>What about your night life? </p>
          </div>

          <ToggleButtonGroup
            value={alignment}
            exclusive={true}
            onChange={toggaleChange}
          >
            <Grid container={true} spacing={1.25}>
              {[
                "I’m in my bed by midnight",
                "NI party in moderation",
                "I’m a night owl",
              ].map((v) => (
                <Grid key={v} item={true}>
                  <ToggleButton
                    value={v}
                    key={v}
                    sx={{
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "10px",
                      textTransform: "none !important",
                      padding: "5px 18px 5px 18px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {v}
                  </ToggleButton>
                </Grid>
              ))}
            </Grid>
          </ToggleButtonGroup>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "500px",
              backgroundColor: "transparent",
            }}
          >
            <p style={{ color: "white" }}>Your opinion about smoking </p>
          </div>

          <ToggleButtonGroup
            value={alignment}
            exclusive={true}
            onChange={toggaleChange}
          >
            <Grid container={true} spacing={1.25}>
              {["A Relationship", "Nothing Serious", "I will find it"].map(
                (v) => (
                  <Grid key={v} item={true}>
                    <ToggleButton
                      value={v}
                      key={v}
                      sx={{
                        border: "1px solid white",
                        color: "white",
                        borderRadius: "10px",
                        textTransform: "none !important",
                        padding: "5px 18px 5px 18px",
                        fontFamily: "Poppins",
                      }}
                    >
                      {v}
                    </ToggleButton>
                  </Grid>
                )
              )}
            </Grid>
          </ToggleButtonGroup>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "500px",
              backgroundColor: "transparent",
            }}
          >
            <p style={{ color: "white" }}>What about kids? </p>
          </div>

          <ToggleButtonGroup
            value={alignment}
            exclusive={true}
            onChange={toggaleChange}
          >
            <Grid container={true} spacing={1.25}>
              {["I love the ones I have", "Love every kid"].map((v) => (
                <Grid key={v} item={true}>
                  <ToggleButton
                    value={v}
                    key={v}
                    sx={{
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "10px",
                      textTransform: "none !important",
                      padding: "5px 18px 5px 18px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {v}
                  </ToggleButton>
                </Grid>
              ))}
            </Grid>
          </ToggleButtonGroup>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "500px",
              backgroundColor: "transparent",
            }}
          >
            <p style={{ color: "white" }}>What are your Eating Habits? </p>
          </div>

          <ToggleButtonGroup
            value={alignment}
            exclusive={true}
            onChange={toggaleChange}
          >
            <Grid container={true} spacing={1.25}>
              {["A little of everything", "Vegetarian", "Junk Food"].map(
                (v) => (
                  <Grid key={v} item={true}>
                    <ToggleButton
                      value={v}
                      key={v}
                      sx={{
                        border: "1px solid white",
                        color: "white",
                        borderRadius: "10px",
                        textTransform: "none !important",
                        padding: "5px 18px 5px 18px",
                        fontFamily: "Poppins",
                      }}
                    >
                      {v}
                    </ToggleButton>
                  </Grid>
                )
              )}
            </Grid>
          </ToggleButtonGroup>
        </div>
        <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
          <Button
            // onClick={userInformation}
            variant="outlined"
            href="/location"
            className={classes.btn}
            sx={{ mt: 4, mb: 1 }}
          >
            Continue
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ScreenFourth;
