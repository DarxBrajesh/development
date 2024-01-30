import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { Select, makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
const UpgradePlans = () => {
  const [activeButton, setActiveButton] = useState("platinum"); // Default active button
  const [activePlan, setactivePlan] = useState("1 Week"); // Set to true to have the first plan selected

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const handleSelectedPlan = (plan) => {
    setactivePlan(plan);
  };

  const getButtonStyle = (button) => {
    return {
      color: activeButton === button ? "white" : "rgba(95, 95, 95, 1)",
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "13px !important",
      lineHeight: "0 !important",
      // padding: "5px",
      width: "90%",
      borderRadius: "20px",
      border:
        activeButton === button
          ? "1px solid rgba(255, 160, 176, 1)"
          : "1px solid rgba(255, 160, 176, 1)",
      boxShadow:
        activeButton === button
          ? "0px 4px 4px 0px rgba(255, 108, 130, 0.2)"
          : "0px 4px 4px 0px rgba(255, 108, 130, 0.2)",
      background: activeButton === button ? "rgba(248, 72, 101, 1)" : "#fff", // Change to red for the active button
    };
  };

  const handlePlan = (plan) => {
    return {
      color: activePlan === plan ? "white" : "rgba(95, 95, 95, 1)",
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "13px !important",
      lineHeight: "0 !important",
      // padding: "5px",
      width: "90%",
      borderRadius: "10px",
      border:
        activePlan === plan
          ? "1px solid rgba(255, 160, 176, 1)"
          : "1px solid rgba(255, 160, 176, 1)",
      boxShadow:
        activePlan === plan
          ? "0px 4px 4px 0px rgba(255, 108, 130, 0.2)"
          : "0px 4px 4px 0px rgba(255, 108, 130, 0.2)",
      background: activePlan === plan ? "rgba(248, 72, 101, 1)" : "#fff", // Change to red for the active button
    };
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(248, 72, 101, 0.05), rgba(248, 72, 101, 0.05)), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
        height: "110vh",
        margin: 0,
        padding: 0,
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
          {/* <ChevronLeftIcon sx={{ color: "rgba(151, 151, 151, 1)" }} /> */}
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
            Subscription Plans
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
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "20px" }}
      >
        <Grid
          item
          xs={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            style={getButtonStyle("platinum")}
            onClick={() => handleButtonClick("platinum")}
          >
            <span
              style={{
                color: "rgba(175, 172, 167, 1)",
                // marginLeft: "5px",
                padding: "5px",
              }}
            >
              Luvsi
            </span>
            Platinum Plan
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            style={getButtonStyle("gold")}
            onClick={() => handleButtonClick("gold")}
          >
            <span
              style={{
                color: "rgba(210, 190, 4, 1)",
                marginLeft: "5px",
                padding: "5px",
              }}
            >
              Luvsi
            </span>
            Gold Plan
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            style={getButtonStyle("plus")}
            onClick={() => handleButtonClick("plus")}
          >
            <span
              style={{
                // color: "rgba(248, 72, 101, 1)",

                color:
                  activeButton === "plus" ? "white" : "rgba(248, 72, 101, 1)",
                marginLeft: "5px",
                padding: "5px",
              }}
            >
              Luvsi
            </span>
            Plus Plan
          </Button>
        </Grid>
      </Grid>

      <Container maxWidth="md" sx={{ marginTop: "40px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(180deg, rgba(255, 149, 166, 0.9) 0%, #FF3B5C 75.17%)",
            height: "70vh",
            boxShadow: "0px 2px 4px 2px rgba(255, 108, 130, 0.2)",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "40px !important" }}
          >
            <Grid
              item
              xs={3}
              justifyContent="center"
              alignItems="center"
              sx={{
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                style={handlePlan("platinum")}
                onClick={() => handleSelectedPlan("platinum")}
                sx={{ display: "block", width: "100%" }}
              >
                <span
                  style={{
                    display: "block",
                    color:
                      activePlan === "platinum"
                        ? "white"
                        : "rgba(248, 72, 101, 1)",
                    padding: "5px",
                  }}
                >
                  1 Week
                </span>
                <span
                  style={{
                    display: "block",
                    color:
                      activePlan === "platinum"
                        ? "white"
                        : "rgba(95, 95, 95, 1)",
                  }}
                >
                  Platinum Plan
                </span>
              </Button>
            </Grid>
            <Grid
              item
              xs={3}
              justifyContent="center"
              alignItems="center"
              sx={{
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                style={handlePlan("gold")}
                onClick={() => handleSelectedPlan("gold")}
                sx={{ display: "block", width: "100%" }}
              >
                <span
                  style={{
                    display: "block",
                    color:
                      activePlan === "gold" ? "white" : "rgba(248, 72, 101, 1)",
                    padding: "5px",
                  }}
                >
                  1 Month
                </span>
                <span
                  style={{
                    display: "block",
                    color:
                      activePlan === "gold" ? "white" : "rgba(95, 95, 95, 1)",
                  }}
                >
                  Gold Plan
                </span>
              </Button>
            </Grid>
            <Grid
              item
              xs={3}
              justifyContent="center"
              alignItems="center"
              sx={{
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                style={handlePlan("plus")}
                onClick={() => handleSelectedPlan("plus")}
                sx={{ display: "block", width: "100%" }}
              >
                <span
                  style={{
                    display: "block",
                    color:
                      activePlan === "plus" ? "white" : "rgba(248, 72, 101, 1)",
                    padding: "5px",
                  }}
                >
                  6 Month
                </span>
                <span
                  style={{
                    display: "block",
                    color:
                      activePlan === "plus" ? "white" : "rgba(95, 95, 95, 1)",
                  }}
                >
                  Plus Plan
                </span>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              marginTop: "40px !important",
              padding: "0px 100px 0px 100px",
            }}
          >
            <Grid
              item
              xs={6}
              justifyContent="center"
              alignItems="center"
              sx={{
                textAlign: "left",
                borderRight: "1px solid gray",
                padding: "16px",
                background: "white",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            >
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <Typography>
                    <DoneIcon
                      style={{
                        marginRight: "8px",
                        color: "rgba(248, 72, 101, 1)",
                      }}
                    />
                    Unlimited Likes
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <CloseIcon
                      style={{
                        marginRight: "8px",
                        color: "rgba(255, 149, 166, 0.9)",
                      }}
                    />
                    See Who Likes You
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <CloseIcon
                      style={{
                        marginRight: "8px",
                        color: "rgba(255, 149, 166, 0.9)",
                      }}
                    />
                    Priority Likes
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <DoneIcon
                      style={{
                        marginRight: "8px",
                        color: "rgba(248, 72, 101, 1)",
                      }}
                    />
                    Unlimited Rewinds
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <CloseIcon
                      style={{
                        marginRight: "8px",
                        color: "rgba(255, 149, 166, 0.9)",
                      }}
                    />
                    1 Free Booster Per Month
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid
              item
              xs={6}
              justifyContent="center"
              alignItems="center"
              sx={{
                textAlign: "left",
                borderLeft: "1px solid gray",
                background: "white",
                padding: "16px",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <Typography>
                    <CloseIcon
                      style={{
                        marginRight: "8px",
                        color: "rgba(255, 149, 166, 0.9)",
                      }}
                    />
                    5 Free Super Likes/Weekly
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <DoneIcon
                      style={{
                        marginRight: "8px",
                        color: "rgba(248, 72, 101, 1)",
                      }}
                    />
                    Message Before Matching
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <DoneIcon
                      style={{
                        marginRight: "8px",
                        color: "rgba(248, 72, 101, 1)",
                      }}
                    />
                    Control Your Profile
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <DoneIcon
                      style={{
                        marginRight: "8px",
                        color: "rgba(248, 72, 101, 1)",
                      }}
                    />
                    Control Who See You
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <DoneIcon
                      style={{
                        marginRight: "8px",
                        color: "rgba(248, 72, 101, 1)",
                      }}
                    />
                    Hide Ads
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Button
            sx={{
              marginTop: "20px",
              background: `linear-gradient(93.6deg, rgba(255, 106, 131, 0.78) 39.62%, rgba(252, 106, 130, 0.26) 147.48%),
      linear-gradient(0deg, #FFFFFF, #FFFFFF)`,
              border: "1px solid rgba(255, 255, 255, 1)",
              boxShadow: "13px 13px 28px 2px rgba(243, 86, 112, 0.29)",
              color: "#fff",
              textTransform: "none",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
              width: "200px",
            }}
          >
            Checkout Now
          </Button>
          <p style={{ marginTop: "10px", color: "white" }}>No Thanks</p>
        </Box>
      </Container>
    </div>
  );
};

export default UpgradePlans;
