import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import img from "../assets/home2.png";
import homeText from "../assets/homeText.png";
// import appBtn from "../assets/appBtn.png";
// import { shadows } from "@material-ui/system";
import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
import Header from "./Header";

import { useNavigate } from "react-router-dom";
import HomeIcon from "../assets/homeIcon.png";
import { Box, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { profileForm } from "../schemas";
const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: "20px !important",
    padding: "10px !important",
    color: "#fff !important",
    border: "1px solid #fff !important",
    borderRadius: "8px !important",
    fontFamily: "Poppins !important",
    fontWeight: "700 !important",
    lineHeight: "20px !important",
    letterSpacing: "0em !important",
    // boxShadow: "1px 1px 2px 1px rgba(255,255,255,.8)",
    "&:hover": {
      border: "1px solid white !important",
    },
    // [theme.breakpoints.between("xs", "sm")]: {
    //   fontSize: "12px !important",
    //   padding: "5px !important",
    //   lineHeight: "15px !important",
    // },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important",
      padding: "8px !important",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "16px !important",
      padding: "9px !important",
    },
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "18px !important",
      padding: "10px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px !important",
      padding: "12px !important",
    },
  },
  btnContainer: {
    backgroundPosition: "center",
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    tabSize: "center",
    // [theme.breakpoints.up("sm")]: {
    //   // Tablet styles
    //   fontSize: "18px !important",
    //   padding: "12px !important",
    // },
    // [theme.breakpoints.up("md")]: {
    //   // Laptop styles
    //   fontSize: "20px !important",
    //   padding: "14px !important",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   // Desktop styles
    //   fontSize: "24px !important",
    //   padding: "16px !important",
    // },
  },
  imgContainer: {
    position: "absolute !important",
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    marginTop: "6% !important",
    textAlign: "center !important",
    width: "97.5% !important",
    // border: "2px solid white",
    // marginLeft: "29% !important",
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.between("sm", "md")]: {},
    [theme.breakpoints.between("md", "lg")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
  lavshiText: {
    fontSize: "40px !important",
    padding: "10px !important",
    color: "#fff !important",
    fontFamily: "Poppins !important",
    fontWeight: "700 !important",
    lineHeight: "62px !important",
  },
  imgSize: {
    [theme.breakpoints.down("xs")]: {
      width: "69% !important",
      marginTop: "42%",
      marginLeft: "-20px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "70% !important",
      // marginTop: "10%",
      // marginLeft: "-20px",
    },
    [theme.breakpoints.down("md", "lg")]: {
      width: "69% !important",
      marginTop: "6%",
      marginLeft: "-60px",
    },
    [theme.breakpoints.up("lg")]: {
      // width: "69% !important",
      // marginTop: "6%",
      // marginLeft: "-60px",
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
  const [data, setData] = useState([""]);
  const [isButtonVisible, setButtonVisibility] = useState(true);

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
    // setButtonVisibility(false);
  };
  const FetchData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://luvsi.darxtechnologies.com/public/api/splash/web",
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson !== "") {
          setData(responseJson.result);
          console.log(data[0].answers, "data...");
        } else {
          alert("error in response");
        }
      });
  };
  useEffect(() => {
    FetchData();
  }, []);
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
        <Box className={classes.imgContainer}>
          <img src={homeText} alt="" className={classes.imgSize} />
          {/* <Typography className={classes.lavshiText}>
            LETS SPREAD <span></span>L{" "}
            <span style={{ marginLeftLeft: "75px !important" }}>VE</span>
            {""}
            <span></span> TOGETHER
          </Typography> */}
        </Box>
      )}
      <div className={classes.btnContainer} loading="lazy">
        <Button
          size="small"
          href="/screen-one"
          variant="outlined"
          className={classes.btn}
          onClick={handleOpen}
        >
          CREATE ACCOUNT
        </Button>
      </div>
    </Container>
  );
};

export default LandingPage;
