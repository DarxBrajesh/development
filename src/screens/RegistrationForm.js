import React, { useState } from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";

import { Form, useFormik } from "formik";
import img from "../assets/home.png";
import HomeIcon from "../assets/homeIcon.png";
import Loader from "./Loader";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signUpSchema } from "../schemas";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    ...commonButtonStyles,
    width: "250px",
    marginLeft: "20%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      width: "100%",
    },
  },
  inputField: {
    ...commonInputStyles,
    width: "100%",
    color: "black !important",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  innerContainer: {
    ...commonInnerContainerStyles,
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      padding: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "250px",
      padding: "20px",
    },
  },
}));
const commonButtonStyles = {
  background: "transparent !important",
  color: "white !important",
  borderRadius: "10px !important",
  marginTop: "20px !important",
  padding: "6px !important",
  fontSize: "15px !important",
  border: "1px solid white !important",
};

const commonInputLabelStyles = {
  color: "white !important",
  borderRadius: "12px",
  border: "none",
  marginTop: "5px",
};
const commonInputStyles = {
  ...commonInputLabelStyles,
  width: "100%",
  border: "none",
  marginTop: "5px",
  background: "white",
  textTransform: "none",
  borderColor: "white",
  "& label.Mui-focused": {
    ...commonInputLabelStyles,
  },
  "& .MuiOutlinedInput-root": {
    ...commonInputLabelStyles,
    "& fieldset": {
      ...commonInputLabelStyles,
    },
    "&.Mui-focused fieldset": {
      ...commonInputLabelStyles,
    },
    "& .MuiInputLabel-root.Mui-focused ": {
      ...commonInputLabelStyles,
    },
  },
};
const commonInnerContainerStyles = {
  position: "absolute !important",
  width: 450,
  bgcolor: "background.paper !important",
  border: "1px solid #fff !important",
  boxShadow: 24,
  padding: "15px 35px 35px 35px",
  top: "50% !important",
  left: "50% !important",
  transform: "translate(-50%, -50%) !important",
  display: "flex !important",
  flexDirection: "column !important",
  alignItems: "center !important",
  background: "transparent !important",
  borderRadius: "10px !important",
};
const defaultTheme = createTheme();
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
};
const RegistrationForm = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      // Reset the form after successful submission
      resetForm();
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth="false"
        sx={{
          p: { xs: 2, sm: 5, md: 2 },
          background: `url(${img}) center center/cover`,
          minHeight: "100vh",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <img
            src={HomeIcon}
            alt=""
            style={{ width: "125px", height: "50px" }}
          />
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
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={HomeIcon}
                alt=""
                style={{ width: "100px", height: "40px", marginTop: "-15px" }}
              />
              <Typography component="h1" variant="h5" sx={{ m: 1 }}>
                Sign up
              </Typography>
              <form onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      fullWidth
                      id="firstName"
                      label="First Name"
                      value={values.firstName}
                      inputProps={{ className: classes.inputField }}
                      className={classes.inputField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="small"
                    />
                    {errors.firstName && touched.firstName ? (
                      <p className="form-error">{errors.firstName}</p>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      value={values.lastName}
                      inputProps={{ className: classes.inputField }}
                      className={classes.inputField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="small"
                    />
                    {errors.lastName && touched.lastName ? (
                      <p className="form-error">{errors.lastName}</p>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={values.email}
                      inputProps={{ className: classes.inputField }}
                      className={classes.inputField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="small"
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="mobile"
                      label="Mobile No."
                      name="mobile"
                      autoComplete="mobile"
                      value={values.mobile}
                      inputProps={{ className: classes.inputField }}
                      className={classes.inputField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="small"
                    />
                    {errors.mobile && touched.mobile ? (
                      <p className="form-error">{errors.mobile}</p>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      inputProps={{ className: classes.inputField }}
                      className={classes.inputField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      autoComplete="new-password"
                      size="small"
                    />
                    {errors.firstName && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  size="small"
                  className={classes.btn}
                  sx={{ mt: 4, mb: 2, padding: "5px", fontSize: "15px" }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link href="/sign-in" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};
export default RegistrationForm;
