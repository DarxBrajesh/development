import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
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
    marginTop: "5px",
    background: "white",
    textTransform: "none",
    borderColor: "white",
    "& label.Mui-focused": {
      color: "white !important",
      borderRadius: "12px",
      border: "none",
      marginTop: "5px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderRadius: "12px",
        border: "none",
        marginTop: "5px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderRadius: "12px",
        border: "none",
        marginTop: "5px",
      },
      "& .MuiInputLabel-root.Mui-focused ": {
        color: "white !important",
        borderRadius: "12px",
        border: "none",
        marginTop: "5px",
      },
    },
  },
  genderField: {
    "& .MuiFormControlLabel-root.MuiFormControlLabel-label": {
      color: "blue !important",
    },
  },
}));
const initialValues = {
  fullname: "",
  dob: "",
  gender: "",
  city: "",
};
const ScreenTwo = () => {
  let navigate = useNavigate();
  const [alignment, setAlignment] = React.useState("web");
  const classes = useStyles();
  const [social, setSocail] = useState(false);
  const [uploadImg, setUploadImg] = useState(false);
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
  const userInformation = () => {
    setOpen(false);
    setUploadImg(true);
    setSocail(false);
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
          <label style={{ color: "white" }}>What is your first name ?</label>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            name="fullname"
            placeholder="First Name"
            inputProps={{ className: classes.inputField }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullname}
            className={classes.inputField}
            autoComplete="Full-name"
            size="small"
          />
          {errors.fullname && touched.fullname ? (
            <p className="form-error">{errors.fullname}</p>
          ) : null}
          {/* <label style={{ color: "white" }}>Email Address</label>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            placeholder="Email"
            name="email"
            inputProps={{ className: classes.inputField }}
            className={classes.inputField}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            size="small"
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null} */}
          <label style={{ color: "white", marginTop: "15px" }}>
            Date of Birth
          </label>
          <TextField
            type="date"
            fullWidth
            name="dob"
            className={classes.inputField}
            sx={{ mt: 2 }}
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
          />
          {errors.dob && touched.dob ? (
            <p className="form-error">{errors.dob}</p>
          ) : null}
          <Typography
            component="h1"
            variant="h6"
            sx={{ fontSize: "15px", mt: 2, color: "white", marginTop: "15px" }}
          >
            Gender
          </Typography>
          {/* <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              onChange={handleChange}
              onBlur={handleBlur}
              className={classes.genderField}
              value="female"
              name="gender"
              style={{ color: "white" }}
              control={<Radio />}
              label="Female"
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                  color: "white",
                },
              }}
            />
            <FormControlLabel
              onChange={handleChange}
              onBlur={handleBlur}
              className={classes.genderField}
              value="male"
              name="gender"
              control={<Radio />}
              label="Male"
              style={{ color: "white" }}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                  color: "white",
                },
              }}
            />
            <FormControlLabel
              onChange={handleChange}
              onBlur={handleBlur}
              value="other"
              className={classes.genderField}
              name="gender"
              style={{ color: "white" }}
              control={<Radio />}
              label="Other"
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                  color: "white",
                },
              }}
            />
          </RadioGroup>
          {errors.gender && touched.gender ? (
            <p className="form-error">{errors.gender}</p>
          ) : null} */}
          <Grid
            container
            spacing={2}
            sx={{ marginBottom: "15px", marginTop: "5px" }}
          >
            <Grid item xs={4}>
              <Button
                style={{
                  background: "transparent",
                  color: "#fff",
                  marginRight: "20px",
                  // padding: "5px",
                  width: "100px",
                  borderRadius: "8px",
                  border: "1px solid white",
                  // boxShadow: "5px 5px 10px 2px rgba(0,0,0,.8)",
                }}
                variant="outlined"
                size="small"
              >
                Male
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                style={{
                  background: "transparent",
                  color: "#fff",
                  marginRight: "20px",
                  // padding: "5px",
                  width: "100px",
                  borderRadius: "8px",
                  border: "1px solid white",
                  // boxShadow: "5px 5px 10px 2px rgba(0,0,0,.8)",
                }}
                variant="outlined"
                size="small"
              >
                Female
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                style={{
                  background: "transparent",
                  color: "#fff",
                  marginRight: "20px",
                  // padding: "5px",
                  width: "100px",
                  borderRadius: "8px",
                  border: "1px solid white",

                  // boxShadow: "5px 5px 10px 2px rgba(0,0,0,.8)",
                }}
                variant="outlined"
                size="small"
              >
                Other
              </Button>
            </Grid>
          </Grid>
          <label style={{ color: "white" }}>Your city you live in</label>
          <TextField
            margin="normal"
            fullWidth
            id="city"
            placeholder="Your city"
            name="city"
            className={classes.inputField}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            autoComplete="city"
            size="small"
          />
          {errors.city && touched.city ? (
            <p className="form-error">{errors.city}</p>
          ) : null}
          <Button
            // type="submit"
            fullWidth
            size="small"
            onClick={userInformation}
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

export default ScreenTwo;
