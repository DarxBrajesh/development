import React, { useEffect, useState } from "react";
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
import Loader from "./Loader";
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
    "@media (max-width: 480px)": {
      marginLeft: "0% !important",
      width: "100% !important",
    },
    "@media (max-width: 768px)": {
      marginLeft: "0% !important",
      width: "100% !important",
    },
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
  innerContainer: {
    position: "absolute !important",
    width: 380,
    bgcolor: "background.paper !important",
    border: "1px solid #fff !important",
    boxShadow: 24,
    padding: "35px",
    top: "53% !important",
    left: "50% !important",
    transform: "translate(-50%, -50%) !important",
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    background: "transparent !important",
    borderRadius: "10px !important",
    "@media (max-width: 768px)": {
      width: "300px",
      padding: "20px",
    },

    "@media (max-width: 480px)": {
      width: "250px",
      padding: "20px",
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
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([""]);
  const [genders, setGenders] = useState([]);
  const toggaleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleClose = () => {};
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(
          "https://luvsi.darxtechnologies.com/public/api/registrationProcess/getGender",
          requestOptions
        )
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson !== "") {
              setGenders(responseJson.result);

              setIsLoading(false);
            } else {
              alert("error in response");
            }
          });
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
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

      {isLoading ? (
        <div
          style={{
            width: "100px",
            marginTop: "15%",
            marginLeft: "45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <Box className={classes.innerContainer}>
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
              sx={{
                fontSize: "15px",
                mt: 2,
                color: "white",
                marginTop: "15px",
              }}
            >
              Gender
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {genders.map((gender) => (
                <FormControlLabel
                  key={gender.id}
                  value={gender.gender_name.toLowerCase()}
                  control={<Radio />}
                  label={gender.gender_name}
                  className="classes.genderField"
                  style={{ color: "white" }}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                      color: "white",
                    },
                  }}
                  onChange={handleChange}
                />
              ))}
            </RadioGroup>

            {errors.gender && touched.gender ? (
              <p className="form-error">{errors.gender}</p>
            ) : null}
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
      )}
    </Container>
  );
};

export default ScreenTwo;
