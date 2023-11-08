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
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";
import { Form, useFormik } from "formik";
import img from "../assets/home.png";
import { signInSchema } from "../schemas";
import Header from "../components/Header";
const theme = createTheme({
  palette: {
    // primary: lime,
    // secondary: purple,
  },
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
  let navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        if (values.email !== "") {
          window.sessionStorage.setItem("email", values.email);
          window.sessionStorage.setItem("pass", values.password);
          // window.location.href = "/profilesection";
          navigate("/profilesection");
        }
        action.resetForm();
      },
    });

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="false"
        style={{ backgroundImage: `url(${img})`, height: "100vh" }}
      >
        <CssBaseline />
        <Header />
        <Box
          sx={{
            // marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            // elevation={2}
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
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "#fff" }}>
              Sign in
            </Typography>
            <form onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                margin="normal"
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
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link href="#">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    padding: "8px",
                    fontSize: "15px",
                  }}
                >
                  Sign In
                </Button>
              </Link>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgetpassword" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {/* <Link href="/forgetpassword" variant="body2"> */}
                    {"Don't have an account? Sign Up"}
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

export default SignIn;
