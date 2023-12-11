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
            href="/screen-one"
            variant="outlined"
            sx={{
              fontSize: "20px",
              padding: "10px",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "8px",
              fontFamily: "Poppins",

              fontWeight: "700",
              lineHeight: "20px",
              letterSpacing: "0em",

              // boxShadow: "1px 1px 2px 1px rgba(255,255,255,.8)",
              "&:hover": {
                border: "1px solid white",
              },
            }}
            onClick={handleOpen}
          >
            CREATE ACCOUNT
          </Button>
        )}
      </div>
    </Container>
  );
};

export default LandingPage;
