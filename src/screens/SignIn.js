import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form, useFormik } from "formik";
import Loader from "./Loader";
import img from "../assets/home.png";
import HomeIcon from "../assets/homeIcon.png";
import { signInSchema } from "../schemas";

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
    width: "25%",
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
  marginTop: "5px !important",
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
  width: 380,
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

const theme = createTheme({
  palette: {},
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url(${img})`,
        },
      },
    },
  },
});

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: async (values, action) => {
        console.log(values);
        try {
          setIsLoading(true);
          // Simulate API call or any asynchronous operation
          await new Promise((resolve) => setTimeout(resolve, 2000));
          window.sessionStorage.setItem("email", values.email);
          window.sessionStorage.setItem("pass", values.password);
          navigate("/profilesection");
        } catch (error) {
          console.error("Sign-in error:", error);
        } finally {
          setIsLoading(false);
          action.resetForm();
        }
      },
    });

  return (
    <ThemeProvider theme={theme}>
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
              <Typography
                component="h1"
                variant="h5"
                sx={{ color: "#fff", marginTop: "15px", fontSize: "20px" }}
              >
                Sign in
              </Typography>
              <form onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <label style={{ color: "white" }}>Email Id</label>
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="Email"
                  inputProps={{ className: classes.inputField }}
                  className={classes.inputField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  autoComplete="email"
                  size="small"
                  aria-label="email-input"
                />
                {errors.email && touched.email && (
                  <p className="form-error">{errors.email}</p>
                )}

                <label style={{ color: "white" }}>Password</label>
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  type="password"
                  placeholder="password"
                  id="password"
                  value={values.password}
                  inputProps={{ className: classes.inputField }}
                  className={classes.inputField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="current-password"
                  size="small"
                  aria-label="password-input"
                />
                {errors.password && touched.password && (
                  <p className="form-error">{errors.password}</p>
                )}

                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      sx={{ color: "white !important" }}
                    />
                  }
                  label="Remember me"
                  sx={{ color: "white !important" }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  className={classes.btn}
                  size="small"
                  aria-label="submit-button"
                >
                  Sign In
                </Button>

                <Grid
                  container
                  sx={{ marginTop: "20px", color: "white !important" }}
                >
                  <Grid item xs>
                    <Link
                      component="a"
                      href="/forgetpassword"
                      variant="body2"
                      sx={{ color: "white !important" }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      component="a"
                      href="/sign-up"
                      variant="body2"
                      sx={{ color: "white !important" }}
                    >
                      {"Don't have an account? Sign Up"}
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

export default SignIn;
