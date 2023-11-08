import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Paper,
  Box,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Form, useFormik } from "formik";
import img from "../assets/home.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signUpSchema } from "../schemas";
import Header from "../components/Header";
const defaultTheme = createTheme();
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
};
const RegistrationForm = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);

        action.resetForm();
      },
    });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth="false"
        style={{ backgroundImage: `url(${img})`, height: "100vh" }}
      >
        <CssBaseline />
        <Header />
        <Box
          sx={{
            // marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            // elevation={3}
            style={{
              marginTop: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px",
              // backgroundColor: "rgba(255, 255, 255, 0.5)",
              opacity: 0.9,
              borderWidth: "2px",
              borderStyle: "dashed",
              borderColor: "#fff",
              width: "60%",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ m: 1 }}>
              Sign up
            </Typography>
            <form onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    autoComplete="new-password"
                  />
                  {errors.firstName && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, padding: "8px", fontSize: "15px" }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/sign-in" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default RegistrationForm;
