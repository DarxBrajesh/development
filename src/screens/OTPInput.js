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
    marginTop: "25px !important",
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
    background: "white",
    textTransform: "none",
    borderColor: "white",
    "& label.Mui-focused": {
      color: "white !important",
      borderRadius: "12px",
      border: "none",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderRadius: "12px",
        border: "none",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderRadius: "12px",
        border: "none",
      },
      "& .MuiInputLabel-root.Mui-focused ": {
        color: "white !important",
        borderRadius: "12px",
        border: "none",
      },
    },
  },
  genderField: {
    "& .MuiFormControlLabel-root.MuiFormControlLabel-label": {
      color: "blue !important",
    },
  },
}));
const OTPInput = () => {
  const classes = useStyles();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  let navigate = useNavigate();
  const handleInputChange = (index, value) => {
    if (/^\d{0,1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1 && value !== "") {
        inputRefs[index + 1].focus();
      }
    }
  };

  const inputRefs = [];
  const handleSubmit = () => {
    const otpValue = otp.join("");
    console.warn(otpValue);
    if (otpValue !== "") {
      navigate("/profilesection");
    }
  };
  // const { values, errors, handleBlur, handleChange, touched } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: profileForm,
  //   validateOnChange: true,
  //   validateOnBlur: false,
  //   onSubmit: (values, action) => {
  //     console.log(values);
  //     window.location.href = "/profilesection";
  //     action.resetForm();
  //   },
  // });

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
        <Typography component="h1" variant="h3" style={{ color: "#fff" }}>
          Enter your code
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2, marginLeft: "1px" }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ textAlign: "center", fontSize: "15px" }}
          >
            +{window.sessionStorage.getItem("mobile")}
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{ textAlign: "center", fontSize: "15px" }}
          >
            <Link style={{ color: "#fff" }}>Resend Code</Link>
          </Grid>
        </Grid>
        {/* <img src={HomeIcon} alt="" style={{ marginTop: "-20px" }} /> */}
        <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Box
              sx={{
                mt: 4,
                ml: 3,
                justifyContent: "center",
                gap: "10px",
                display: "flex",
                padding: 3,
              }}
            >
              {otp.map((value, index) => (
                <TextField
                  key={index}
                  inputRef={(ref) => (inputRefs[index] = ref)}
                  variant="outlined"
                  size="small"
                  name="otp"
                  type="text"
                  maxLength="1"
                  style={{
                    width: "40px",
                    textAlign: "center",
                    border: "1px solid #fff",
                  }}
                  value={value}
                  onChange={(event) =>
                    handleInputChange(index, event.target.value)
                  }
                />
              ))}
            </Box>
          </Grid>
          <div>
            <Link
              href="/mobileno"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                marginLeft: "25px",
                color: "#fff",
                // lineHeight: "30px",
                marginBottom: "20px",
              }}
            >
              Update contact info
            </Link>
          </div>
          <Button
            // type="submit"
            fullWidth
            size="small"
            variant="outlined"
            className={classes.btn}
            href="/screen-three"
          >
            Verify OTP
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default OTPInput;
