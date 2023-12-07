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
const ImageScreen = () => {
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
        <Header />
      </Box>
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
