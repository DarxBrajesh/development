import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import img from "../assets/home2.png";
import homeText from "../assets/homeText.png";
// import appBtn from "../assets/appBtn.png";
// import { shadows } from "@material-ui/system";
import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
import Header from "./Header";
import Location from "../assets/locationIcon.png";
import Img from "../assets/heart.png";
import Img1 from "../assets/Group1.png";
import Img2 from "../assets/Group2.png";
import Img3 from "../assets/Group3.png";
import RightIcon from "../assets/rightIcon.png";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "../assets/homeIcon.png";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { profileForm } from "../schemas";
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
const LandingPage = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [social, setSocail] = useState(false);
  const [finish, setFinish] = useState(false);
  const [uploadImg, setUploadImg] = useState(false);
  const [location, setLocation] = useState(false);
  const [isButtonVisible, setButtonVisibility] = useState(true);
  const [alignment, setAlignment] = React.useState("web");
  const [age, setAge] = React.useState("");

  const ageHandleChange = (event) => {
    setAge(event.target.value);
  };
  const toggaleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
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

  const handleOpen = () => {
    setOpen(true);
    // setButtonVisibility(false);
  };
  const socialLogin = () => {
    setSocail(true);
    setOpen(false);
  };
  const userInformation = () => {
    setOpen(false);
    setUploadImg(true);
    setSocail(false);
  };
  const uploadImage = () => {
    setLocation(true);

    setUploadImg(false);
  };
  const locationOpen = () => {
    setFinish(true);
    setLocation(false);
  };
  const handleClose = () => {
    setOpen(false);
    setButtonVisibility(true);
  };
  const routeChange = () => {
    let path = `/dashboard`;
    navigate(path);
  };
  const [images, setImages] = useState(Array(4).fill(""));

  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(event.target.files[0]);
    setImages(newImages);
  };
  const handleFBLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          // Here, you can use the access token from the response for further actions.
          console.log(
            "Logged in with Facebook:",
            response.authResponse.accessToken
          );
        } else {
          console.log("Facebook login failed.");
        }
      },
      { scope: "public_profile,email" } // Requested permissions
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
        <Header />
      </Box>
      {/* <Header /> */}
      {isButtonVisible && (
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6%",
            textAlign: "center",
            // border: "2px solid white",
            marginLeft: "25.5%",
          }}
        >
          <img src={homeText} alt="" />
        </Box>
      )}
      {/* <Typography>LETS SPREAD L VE TOGETHER</Typography> */}

      {/* <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            width: 400,
            bgcolor: "background.paper",
            border: "1px solid #fff",
            boxShadow: 24,
            p: 4,
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
          <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Full Name"
              name="fullname"
              inputProps={{ className: classes.inputField }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullname}
              className={classes.inputField}
              autoComplete="Full-name"
            />
            {errors.fullname && touched.fullname ? (
              <p className="form-error">{errors.fullname}</p>
            ) : null}
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              className={classes.inputField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
            <TextField
              type="date"
              fullWidth
              name="dob"
              className={classes.inputField}
              sx={{ mt: 1 }}
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.dob && touched.dob ? (
              <p className="form-error">{errors.dob}</p>
            ) : null}
            <Typography
              component="h1"
              variant="h6"
              sx={{ fontSize: "15px", mt: 2 }}
            >
              Gender
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                onChange={handleChange}
                onBlur={handleBlur}
                value="female"
                name="gender"
                control={<Radio />}
                label="Female"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
              />
              <FormControlLabel
                onChange={handleChange}
                onBlur={handleBlur}
                value="male"
                name="gender"
                control={<Radio />}
                label="Male"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
              />
              <FormControlLabel
                onChange={handleChange}
                onBlur={handleBlur}
                value="other"
                name="gender"
                control={<Radio />}
                label="Other"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
              />
            </RadioGroup>
            {errors.gender && touched.gender ? (
              <p className="form-error">{errors.gender}</p>
            ) : null}
            <TextField
              margin="normal"
              fullWidth
              id="city"
              label="Your city you live in"
              name="city"
              className={classes.inputField}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              autoComplete="city"
            />
            {errors.city && touched.city ? (
              <p className="form-error">{errors.city}</p>
            ) : null}
            <Button
              // type="submit"
              fullWidth
              onClick={userInformation}
              variant="outlined"
              className={classes.btn}
              sx={{ mt: 3, mb: 2 }}
            >
              Continue
            </Button>
          </form>
        </Box>
      </Modal> */}

      {/* <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            width: 500,
            bgcolor: "background.paper",
            border: "1px solid #fff",
            boxShadow: 24,
            p: 4,
            top: "53%",
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
              <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
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
          <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Button
              onClick={userInformation}
              variant="outlined"
              className={classes.btn}
              sx={{ mt: 4, mb: 1 }}
            >
              Continue
            </Button>
          </form>
        </Box>
      </Modal> */}
      {/* <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            width: 400,
            bgcolor: "background.paper",
            border: "1px solid #fff",
            boxShadow: 24,
            p: 4,
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
          <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid
              sx={{
                display: "flex",
                width: "100%",
                padding: "10px",
              }}
            >
              {images.map((image, index) => (
                <Grid
                  item
                  xs={5}
                  key={index}
                  sx={{
                    display: "block",
                    width: "100%",
                    ml: 1,
                    // border: "none",
                  }}
                >
                  <Card className={classes.imageCard}>
                    <CardMedia
                      component="img"
                      // alt={`Image ${index + 1}`}

                      height="120"
                      image={image}
                      style={{
                        border: "0px solid #fff",
                        width: "100px",
                        borderRadius: "0px",
                      }}
                    />

                    <CardContent className={classes.cardContent}>
                      <input
                        accept="image/*"
                        style={{ display: "none", border: "none" }}
                        id={`image-input-${index}`}
                        type="file"
                        onChange={(event) => handleImageChange(index, event)}
                      />
                      <label htmlFor={`image-input-${index}`}>
                        {image !== "" ? (
                          ""
                        ) : (
                          <Button
                            component="span"
                            style={{
                              position: "absolute",
                              width: "22%",
                              fontSize: "56px",
                              marginTop: "-120px",
                              padding: "0px",
                              height: "25%",
                              color: "white",
                            }}
                          >
                            +
                          </Button>
                        )}
                      </label>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid
              sx={{
                display: "flex",
                width: "100%",
                padding: "10px",
              }}
            >
              {images.map((image, index) => (
                <Grid
                  item
                  xs={5}
                  key={index}
                  sx={{
                    display: "block",
                    width: "100%",
                    ml: 1,
                    // border: "none",
                  }}
                >
                  <Card className={classes.imageCard}>
                    <CardMedia
                      component="img"
                      // alt={`Image ${index + 1}`}

                      height="120"
                      image={image}
                      style={{
                        border: "0px solid #fff",
                        width: "100px",
                        borderRadius: "0px",
                      }}
                    />

                    <CardContent className={classes.cardContent}>
                      <input
                        accept="image/*"
                        style={{ display: "none", border: "none" }}
                        id={`image-input-${index}`}
                        type="file"
                        onChange={(event) => handleImageChange(index, event)}
                      />
                      <label htmlFor={`image-input-${index}`}>
                        {image !== "" ? (
                          ""
                        ) : (
                          <Button
                            component="span"
                            style={{
                              position: "absolute",
                              width: "22%",
                              fontSize: "56px",
                              marginTop: "-120px",
                              padding: "0px",
                              height: "25%",
                              color: "white",
                            }}
                          >
                            +
                          </Button>
                        )}
                      </label>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              onClick={uploadImage}
              className={classes.btn}
              sx={{ mt: 3, mb: 2, marginLeft: "30%" }}
            >
              Continue
            </Button>
          </form>
        </Box>
      </Modal> */}

      {/* <Modal open={open} onClose={handleClose}>
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

          <img
            src={Location}
            alt=""
            style={{ marginTop: "-20px", width: "60px", height: "60px" }}
          />
          <Typography
            sx={{ color: "#fff", fontSize: "20px", marginTop: "10px" }}
          >
            Allow access to your location
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0 30px 5px 30px" }}>
            <Grid
              item
              xs={12}
              sx={{
                display: "block",
                marginLeft: "35px",
                marginTop: "15px",
              }}
            >
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
            </Grid>
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
              <Button
                variant="outlined"
                className={classes.btn}
                onClick={locationOpen}
                sx={{ width: "80%" }}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal> */}

      {/* <Modal open={open} onClose={handleClose}>
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

          <img
            src={RightIcon}
            alt=""
            style={{ marginTop: "-20px", width: "60px", height: "60px" }}
          />
          <Typography
            sx={{ color: "#fff", fontSize: "20px", marginTop: "10px" }}
          >
            Your profile looks great!
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0 30px 5px 30px" }}>
            <Grid
              item
              xs={12}
              sx={{
                display: "block",
                marginLeft: "35px",
                marginTop: "15px",
              }}
            >
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
            </Grid>
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
              <Button
                variant="outlined"
                className={classes.btn}
                onClick={routeChange}
                sx={{ width: "80%" }}
              >
                Finish
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal> */}
      <div
        style={{
          backgroundPosition: "center",
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          tabSize: "center",
        }}
        loading="lazy"
      >
        {isButtonVisible && (
          <Button
            size="small"
            // href="/home"
            variant="outlined"
            sx={{
              fontSize: "20px",
              padding: "5px",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "8px",
              boxShadow: "1px 1px 2px 1px rgba(255,255,255,.8)",
              "&:hover": {
                border: "1px solid white",
              },
            }}
            onClick={handleOpen}
          >
            Create Account
          </Button>
        )}
      </div>
    </Container>
  );
};

export default LandingPage;
