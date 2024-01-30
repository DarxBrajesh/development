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
    padding: "10px !important",
    fontSize: "15px !important",
    border: "1px solid white !important",
    width: "200px !important",
    "@media (max-width: 768px)": {
      width: "100% !important",
      marginLeft: "0 !important",
      marginTop: "30px !important",
    },

    "@media (max-width: 480px)": {
      width: "100% !important",
      marginLeft: "0 !important",
      marginTop: "30px !important",
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
  imageCard: {
    width: "100%",
    marginBottom: theme.spacing(2),
    border: "2px solid #fff !important",
    background: "transparent !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "centet",
    borderStyle: "dashed !important",
  },
  cardContent: {
    padding: "0px !important",
    // border: "1px solid #fff",
    border: "none",
    height: "100%",
    width: "100% !important",
    position: "relative !important",
    "@media (max-width: 768px)": {
      width: "70% !important",
    },

    "@media (max-width: 480px)": {
      width: "70% !important",
    },
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
      "& p": { display: "none" },
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
  plusBtn: {
    width: "100% !important",
    fontSize: "56px !important",
    padding: "0px !important",
    color: "white !important",
    "@media (max-width: 768px)": {
      width: "100% !important",
    },

    "@media (max-width: 480px)": {
      width: "100% !important",
    },
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
const ImageScreen = () => {
  let navigate = useNavigate();

  const classes = useStyles();
  const [images, setImages] = useState(Array(8).fill(""));

  const handleClose = () => {
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
        <img src={HomeIcon} alt="" style={{ width: "125px", height: "50px" }} />
        {/* <Header /> */}
      </Box>
      <Box className={classes.innerContainer}>
        <div
          style={{
            display: "flex",
            // flexDirection: "column",
            justifyContent: "space-between",
            // alignItems: "flex-end",
            width: "100%",
            backgroundColor: "transparent",
          }}
        >
          <p style={{ color: "white", marginLeft: "10px" }}>
            Add your best photo
          </p>
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

        {/* <img src={HomeIcon} alt="" style={{ marginTop: "-20px" }} /> */}
        <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "10px",
            }}
          >
            {images.map((image, index) => (
              <Grid
                item
                xs={6}
                md={3}
                key={index}
                sx={{
                  display: "block",
                  width: "100%",
                }}
              >
                <Card className={classes.imageCard}>
                  {image === "" ? (
                    ""
                  ) : (
                    <CardMedia
                      component="img"
                      height="100"
                      // width="100"
                      image={image}
                      style={{
                        background: "blue !important",
                        width: "100%",
                      }}
                    />
                  )}

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
                        <Button component="span" className={classes.plusBtn}>
                          +
                        </Button>
                      )}
                    </label>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <div
            style={{
              paddingLeft: "20px",
              paddingTop: "20px",
              marginTop: "-55px",
            }}
          >
            <p style={{ color: "white" }}>Add atleast 3 photos</p>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            href="/screen-fourth"
            onClick={uploadImage}
            className={classes.btn}
            sx={{ mt: 3, mb: 2, marginLeft: "30%" }}
          >
            Continue
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ImageScreen;
