import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Select, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
const useStyles = makeStyles((theme) => ({
  inputField: {
    color: "black !important",
    borderRadius: "12px",
    width: "25%",
    border: "none",
    marginTop: "5px",
    background: "white",
    textTransform: "none",
    borderColor: "white",
    padding: "10px",
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
  typoOne: {
    fontFamily: "Poppins !important",
    fontSize: "20px !important",
    fontWeight: 700,
    lineHeight: "24px !important",
    letterSpacing: "0em",
    textAlign: "cnter !important",
    // paddingLeft: "10px",
    color: "rgba(248, 72, 101, 1)",
  },
  typoTwo: {
    fontFamily: "Poppins !important",
    fontSize: "12px !important",
    fontWeight: 400,
    lineHeight: "24px !important",
    letterSpacing: "0em",
    textAlign: "cnter !important",
    // paddingLeft: "10px",
    color: "gba(95, 95, 95, 1)",
  },
  typoThree: {
    fontFamily: "Poppins !important",
    fontSize: "14px !important",
    fontWeight: 400,
    lineHeight: "24px !important",
    letterSpacing: "0em",
    textAlign: "left",
    // paddingLeft: "10px",
    color: "gba(95, 95, 95, 1)",
  },
  typoFour: {
    fontFamily: "Poppins !important",
    fontSize: "16px !important",
    fontWeight: 900,
    lineHeight: "24px !important",
    letterSpacing: "0em",
    textAlign: "left",
    // paddingLeft: "10px",
    color: "rgba(0, 0, 0, 1)",
  },
}));
const initialValues = {
  name: "",
  valid_date: "",
  cvc_code: "",
  zipCode: "",
  email: "",
};
const Payment = () => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeCheckBox = () => {
    setIsChecked(!isChecked);
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      //   validationSchema: profileForm,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        window.location.href = "/profilesection";
        action.resetForm();
      },
    });
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(248, 72, 101, 0.05), rgba(248, 72, 101, 0.05)), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
        height: "100vh",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          height: "97px",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Grid item xs={2} sx={{ padding: "40px !important" }}>
          <ChevronLeftIcon sx={{ color: "rgba(151, 151, 151, 1)" }} />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ textAlign: "center", padding: "40px !important" }}
        >
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "30px",
              letterSpacing: "0em",
              color: "rgba(254, 81, 92, 1)",
            }}
          >
            Payment Method
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            textAlign: "right",
            padding: "40px !important",
            fontSize: "20px",
            color: "rgba(248, 72, 101, 0.5)",
          }}
        >
          X
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ padding: "60px 100px 0px 150px !important" }}
      >
        <Grid
          item
          xs={8}
          // sx={{
          //   background:
          //     "linear-gradient(180deg, rgba(255, 149, 166, 0.9) 0%, #FF3B5C 75.17%)",
          //   padding: "10px !important",
          // }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              background:
                "linear-gradient(180deg, rgba(255, 149, 166, 0.9) 0%, #FF3B5C 75.17%)",
              padding: "10px !important",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <Grid
              container
              spacing={4}
              sx={{ padding: " 5px 20px 5px 20px !important" }}
            >
              <Grid item xs={12} sm={12}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="name"
                  name="name"
                  placeholder="Cardholder Name"
                  inputProps={{ className: classes.inputField }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={classes.inputField}
                  autoComplete="Name"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  name="valid_date"
                  placeholder="MM/YY"
                  inputProps={{ className: classes.inputField }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.valid_date}
                  className={classes.inputField}
                  autoComplete="Valid-date"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  name="cvc_code"
                  placeholder="CVC"
                  inputProps={{ className: classes.inputField }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cvc}
                  className={classes.inputField}
                  autoComplete="cvc_code"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  name="zipCode"
                  placeholder="Zip Code"
                  inputProps={{ className: classes.inputField }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.zipCode}
                  className={classes.inputField}
                  autoComplete="zipCode"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  name="email"
                  placeholder="Darx123@gmail.com"
                  inputProps={{ className: classes.inputField }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={classes.inputField}
                  autoComplete="email"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": { color: "#fff" },
                      }}
                      checked={isChecked}
                      onChange={handleChangeCheckBox}
                    />
                  }
                  sx={{ color: "#fff" }}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
          </Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#fff",
              width: "100%",
              background: "rgba(255, 108, 130, 1)",
              opecity: "0.8",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            You’ll be able to delete your card details at any time from your
            settings.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              height: "380px !important",
              width: "90% !important",
              background: "rgba(255, 255, 255, 1)",
              boxShadow: "0px 2px 4px 2px rgba(255, 108, 130, 0.2)",
              marginLeft: "20px",
              borderRadius: "16px",
              padding: "25px !important",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                background: "rgba(255, 245, 247, 1)",
                paddingBottom: "15px !important",
                margin: "5px",
                width: "98%",
              }}
            >
              <Grid item xs={8}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    // paddingLeft: "10px",
                    color: "rgba(95, 95, 95, 1)",
                  }}
                >
                  <span style={{ color: "rgba(248, 72, 101, 1" }}>Luvsi</span>
                  Plans Plus
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.typoOne}>$5.9</Typography>
                <Typography className={classes.typoTwo}>
                  $5.99 x 1 Week
                </Typography>
              </Grid>
              <Divider component="Grid" sx={{ width: "100%" }} />
              <Grid item xs={8}>
                <Typography className={classes.typoThree}>Sales Tax</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.typoThree}>$0.00</Typography>
              </Grid>
              <Divider component="Grid" sx={{ width: "100%" }} />
              <Grid item xs={8}>
                <Typography className={classes.typoFour}>TOTAL</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.typoFour}>$5.99</Typography>
              </Grid>
            </Grid>
            <Box
              sx={{
                // background: "rgba(255, 245, 247, 1)",
                paddingBottom: "15px !important",
                margin: "5px",
                width: "98%",
              }}
            >
              <Typography
                sx={{
                  marginTop: "20px",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                By tapping BUY NOW, we will charge your card, your subscription
                will automatically renew for the same package length you
                selected at the same package price
              </Typography>
              <Button
                sx={{
                  background:
                    "linear-gradient(93.6deg, rgba(255, 106, 131, 0.78) 39.62%, rgba(252, 106, 130, 0.26) 147.48%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                  border: "1px solid rgba(255, 255, 255, 1)",
                  boxShadow: "13px 13px 28px 2px rgba(243, 86, 112, 0.29)",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  marginTop: "40px",
                  width: "100%",
                  color: "#fff",
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Payment;
