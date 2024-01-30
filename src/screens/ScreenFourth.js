import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
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
import { Select, makeStyles } from "@material-ui/core";
import HomeIcon from "../assets/homeIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { profileForm } from "../schemas";
import Loader from "./Loader";
import Header from "../components/Header";
const useStyles = makeStyles((theme) => ({
  btn: {
    background: "transparent !important",
    color: "white !important",
    borderRadius: "10px !important",
    marginTop: "5px !important",
    // padding: "10px !important",
    fontSize: "18px !important",
    border: "1px solid white !important",
    width: "200px !important",
    textTransform: "none !important",
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
  innerContainer: {
    position: "absolute !important",
    width: 500,
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
    height: "530px !important",

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
  email: "",
  dob: "",
  gender: "",
  city: "",
};
const ScreenFourth = () => {
  let navigate = useNavigate();
  const [alignment, setAlignment] = React.useState("web");
  const classes = useStyles();

  const [data, setData] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnswerTabs, setSelectedAnswerTabs] = useState([]);

  const handleClose = () => {
    // setButtonVisibility(true);
  };
  const handleToggleClick = (answerTabValue) => {
    const isSelected = selectedAnswerTabs.includes(answerTabValue);
    let updatedSelection = [];

    if (isSelected) {
      // If already selected, remove it from the selection
      updatedSelection = selectedAnswerTabs.filter(
        (tab) => tab !== answerTabValue
      );
    } else {
      // If not selected, add it to the selection
      updatedSelection = [...selectedAnswerTabs, answerTabValue];
    }

    setSelectedAnswerTabs(updatedSelection); // Update selected answer tabs
    console.log("Selected Values:", updatedSelection); // Log selected values
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
  console.log(selectedAnswerTabs, "selectedAnswerTabs...");
  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Fetch data from API
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          "https://luvsi.darxtechnologies.com/public/api/registrationProcess/web/2",
          requestOptions
        )
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson !== "") {
              setData(responseJson.result);
              console.log(responseJson.result, "data...");
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

    // Call the fetchData function
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
          <div
            style={{
              overflowY: "scroll",
              WebkitOverflowScrolling: {
                width: "0px",
                display: "none",
              },
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: "100%",
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
                  marginTop: "-2px",
                }}
              >
                X
              </button>
            </div>

            <Box style={{ width: "100%", backgroundColor: "transparent" }}>
              {data.map((questionData, index) => (
                <div key={index}>
                  <p style={{ color: "white" }}>{questionData.question_name}</p>
                  {questionData.have_answers === 0 &&
                    questionData.value_type === "string" && (
                      <input
                        type="text"
                        placeholder={`Enter a value between ${questionData.value_range}`}
                        style={{
                          padding: "8px",
                          borderRadius: "8px",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      color: "white",
                    }}
                  >
                    <ToggleButtonGroup
                      value={selectedAnswerTabs}
                      exclusive={true}
                      onChange={handleToggleClick}
                    >
                      <Grid container={true} spacing={1.25}>
                        {questionData.answers &&
                          questionData.answers.length > 0 &&
                          questionData.answers.map((answer, answerIndex) => (
                            <Grid key={answerIndex} item={true}>
                              <ToggleButton
                                key={answerIndex}
                                value={answer.answer_option_values}
                                sx={{
                                  color: "white",
                                  borderRadius: "10px",
                                  textTransform: "none !important",
                                  padding: "5px 18px 5px 18px",
                                  fontFamily: "Poppins",
                                  border: `1px solid ${
                                    selectedAnswerTabs.includes(
                                      answer.answer_option_values
                                    )
                                      ? "green"
                                      : "white"
                                  }`,
                                }}
                                onClick={() =>
                                  handleToggleClick(answer.answer_option_values)
                                }
                                size="small"
                              >
                                {answer.answer_option_values}
                              </ToggleButton>
                            </Grid>
                          ))}
                      </Grid>
                    </ToggleButtonGroup>
                  </div>
                </div>
              ))}
            </Box>
          </div>
          <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
            <Button
              // onClick={userInformation}
              variant="outlined"
              href="/location"
              className={classes.btn}
              sx={{ mt: 4, mb: 1 }}
              size="small"
            >
              Continue
            </Button>
          </form>
        </Box>
      )}
    </Container>
  );
};

export default ScreenFourth;
