import React, { useState } from "react";
import {
  Box,
  Button,
  CardContent,
  CardMedia,
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
import Img1 from "../assets/Group1.png";
import Img2 from "../assets/Group2.png";
import Img3 from "../assets/Group3.png";
import Location from "../assets/locationIcon.png";
import { Card, Select, makeStyles } from "@material-ui/core";
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
    // padding: "10px !important",
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
const LocationScreen = () => {
  let navigate = useNavigate();
  const [alignment, setAlignment] = React.useState("web");
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [age, setAge] = React.useState("");
  const [images, setImages] = useState(Array(4).fill(""));

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
  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(event.target.files[0]);
    setImages(newImages);
  };
  const uploadImage = () => {};

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
        <img src={HomeIcon} alt="" style={{ width: "100px", height: "40px" }} />
        {/* <Header /> */}
      </Box>
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
        <Typography sx={{ color: "#fff", fontSize: "20px", marginTop: "10px" }}>
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
            <p
              style={{
                color: "#fff",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              Dummy Information For Location Privacy In Location
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              Dummy Information For Location Privacy In Location
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              Dummy Information For Location Privacy In Location
            </p>
            {/* <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" /> */}
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
              href="/finish"
              // onClick={locationOpen}
              sx={{ width: "80%" }}
              size="small"
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LocationScreen;
