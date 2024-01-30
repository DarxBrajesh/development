import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SuperLike from "../assets/super_like.png";
import ProfileImg from "../assets/yuvraj3.jpg";
import Platinum from "../assets/platinum.png";
import Gold from "../assets/gold.png";
import Plus from "../assets/plus.png";
import CM from "../assets/cm.png";
import Location from "../assets/location.png";
import College from "../assets/college.png";
import Gender from "../assets/gender.png";
import Job from "../assets/job.png";
import Mouth from "../assets/mouth.png";
import Karaoke from "../assets/karaoke.png";
import Baseball from "../assets/baseball.png";
import Basketball from "../assets/basketball-ball.png";
import Note from "../assets/notes.png";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import Boost from "../assets/Boosts.png";
import AgeRangeSlider from "../components/AgeRangeSlider";
import DistanceSlider from "../components/DistanceSlider";
import { Modal, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Subscription from "../assets/Subscription.png";
const useStyles = makeStyles((theme) => ({
  btn: {
    background: `
    linear-gradient(93.6deg, rgba(255, 106, 131, 0.78) 39.62%, rgba(252, 106, 130, 0.26) 147.48%),
    linear-gradient(0deg, #FFFFFF, #FFFFFF)!important
  `,
    boxShadow: "13px 13px 28px 2px rgba(243, 86, 112, 0.29)",
    color: "white !important",
    borderRadius: "10px !important",
    marginTop: "5px !important",
    // padding: "10px !important",
    fontSize: "18px !important",
    border: "1px solid rgba(255, 255, 255, 1) !important",
    width: "200px !important",
    textTransform: "none !important",
  },
  typho: {
    fontFamily: "Poppins !important",
    fontSize: "17px !important",
    fontWeight: 500,
    lineHeight: "25px !important",
    letterSpacing: "0em !important",
    // textAlign: "left",
    paddingLeft: "10px !important",
    // marginTop: "-10px !important",
  },

  cardStyle: {
    // background: "linear-gradient(315deg, #6daddb 0%, #313131 74%)",
    border: 0,
    // backgroundColor: '#6daddb',
    borderRadius: 3,
    color: "white",
    height: 190,
    padding: "20px 30px",
    marginBottom: "15px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
    wordWrap: "break-word",
    whiteSpace: "normal",
  },
  boxStyle: {
    padding: "0 30px",
    borderRadius: 2,
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  },

  listItemStyle: {
    margin: 0,
    padding: "0 0 0 5px",
    borderRadius: "15px",
    marginTop: "10px",
    border: "1px solid rgba(241, 241, 241, 1)",
    color: "white",
    boxShadow:
      "0px 0.8603281378746033px 3.441312551498413px 0px rgba(255, 108, 130, 0.3)",
    backgroundColor: "rgb(255, 108, 130)", // Set the background color to pink
    "&:hover": {
      backgroundColor: "#df2066",
      color: "white",
    },
  },
  gridContainer: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  gridItem: {
    padding: theme.spacing(1),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    lineHeight: 0,

    width: "80px",
  },
  img: {
    width: "20px", // Adjust the width as needed
    height: "20px", // Maintain aspect ratio
  },
  innerContainer: {
    position: "absolute !important",
    width: 350,
    bgcolor: "background.paper !important",
    border: "1px solid #fff !important",
    boxShadow: 24,
    padding: "20px",
    top: "53% !important",
    left: "50% !important",
    transform: "translate(-50%, -50%) !important",
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    background: "#ffffffa1 !important",
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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Profile = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [checked, setChecked] = useState(["range"]);
  const [childData, setChildData] = useState("");

  const DataToParentOnClick = (sendDataToParent) => {
    sendDataToParent(childData);
  };
  const handleSettingsIconClick = () => {
    setOpenModal(true);
  };
  const handleEditIconClick = () => {
    setProfileModal(true);
  };

  const handleCloseSettingModal = () => {
    setOpenModal(false);
  };
  const handleCloseEditModal = () => {
    setProfileModal(false);
  };
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const items = [
    {
      img: <img src={Mouth} alt="" className={classes.img} />,
      text: "Make-up",
    },
    {
      img: <img src={Karaoke} alt="" className={classes.img} />,
      text: "Karaoke",
    },
    {
      img: <img src={Baseball} alt="" className={classes.img} />,
      text: "Baseball",
    },
    {
      img: <img src={Basketball} alt="" className={classes.img} />,
      text: "Basketball",
    },
    { img: <img src={Note} alt="" className={classes.img} />, text: "Writing" },
  ];
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      // initialValues: initialValues,
      // validationSchema: profileForm,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        window.location.href = "/profilesection";
        action.resetForm();
      },
    });
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <div
          style={{
            borderRadius: "5px",
            height: "95vh",
            // padding: "5px",
            border: "2px solid pink",
          }}
        >
          <div
            style={{
              position: "relative",
              background: "rgba(255, 108, 130, 1)",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              height: "250px",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "10px", // Adjust this value to set the top position
                right: "10px", // Adjust this value to set the right position
                background: "rgba(255, 108, 130, 1)",
                borderRadius: "5px",
                height: "40px",
                width: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                zIndex: 999,
              }}
              // Attach click handler
            >
              <SettingsSuggestOutlinedIcon
                sx={{
                  color: "white",
                  cursor: "pointer",
                  // border: "2px solid green",
                }}
                onClick={handleSettingsIconClick}
              />
            </div>

            <div
              style={{
                position: "absolute",

                height: "200px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src={ProfileImg}
                  alt=""
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <EditOutlinedIcon
                sx={{
                  background: "white",
                  position: "absolute",
                  color: "#df2066",
                  borderRadius: "50%",
                  border: "1px solid #df2066",
                  padding: "5px",
                  marginLeft: "40%",
                  width: "40px",
                  top: 30,
                  height: "40px",
                  cursor: "pointer",
                }}
                onClick={handleEditIconClick}
              />
              <p
                style={{
                  position: "absolute",
                  fontFamily: "Poppins",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  width: "50%",
                  borderRadius: "40px",
                  marginTop: "150px",
                  border: "1px solid #df2066",
                  padding: "5px",
                  background: "white",
                  color: "rgba(248, 72, 101, 1)",
                }}
              >
                90% Complete
              </p>
            </div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{
                position: "absolute",
                color: "white",

                marginTop: "65%",
                marginLeft: "15%",
                width: "60%",
              }}
            >
              <Grid item xs={6} style={{ textAlign: "right" }}>
                Daniel,
              </Grid>
              <Grid item xs={2} style={{ textAlign: "left" }}>
                28
              </Grid>
              <Grid item xs={4}>
                <CloudDoneOutlinedIcon sx={{ color: "white" }} />
              </Grid>
            </Grid>
            <Modal open={openModal} onClose={handleCloseSettingModal}>
              <Box className={classes.innerContainer}>
                <div
                  style={{
                    overflowY: "scroll",
                    width: "90%",
                    WebkitOverflowScrolling: {
                      width: "0px",
                      display: "none",
                    },
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      backgroundColor: "transparent",
                      padding: 0,
                    }}
                  >
                    <p
                      style={{
                        // width: "40%",
                        color: "white",
                        fontSize: "25px",
                        padding: 0,
                        lineHeight: 0,
                      }}
                    >
                      Setting
                    </p>
                    <button
                      onClick={handleCloseSettingModal}
                      style={{
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        color: "white",
                        fontSize: "25px",
                        padding: 0,
                        marginTop: "-2px",
                        alignItems: "flex-end",
                      }}
                    >
                      X
                    </button>
                  </div>

                  <Box
                    style={{ width: "100%", backgroundColor: "transparent" }}
                  >
                    <List>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText id="Distance" primary="Distance" />
                        </ListItem>
                        <ListItem>
                          <DistanceSlider />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            id="Targeted-People-Filtering"
                            primary="Targeted People Filtering"
                          />
                          <Switch
                            style={{ color: "#fff" }}
                            edge="end"
                            onChange={handleToggle("range")}
                            checked={checked.indexOf("range") !== -1}
                          />
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText
                            id="looking-for"
                            primary="Looking for"
                          />
                          <p>Male</p>
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText id="age-preference" primary="Age" />
                        </ListItem>
                        <ListItem>
                          <AgeRangeSlider />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            id="Targeted-People-Filtering"
                            primary="Targeted People Filtering"
                          />
                          <Switch
                            style={{ color: "#fff" }}
                            edge="end"
                            onChange={handleToggle("range")}
                            checked={checked.indexOf("range") !== -1}
                          />
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText id="Date Mode" primary="Date Mode" />
                          <Switch
                            style={{ color: "#fff" }}
                            edge="end"
                            onChange={handleToggle("range")}
                            checked={checked.indexOf("range") !== -1}
                          />
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText id="Snooze" primary="Snooze" />
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText
                            id="Incognito Mode"
                            primary="Incognito Mode"
                          />
                          <Switch
                            style={{ color: "#fff" }}
                            edge="end"
                            onChange={handleToggle("range")}
                            checked={checked.indexOf("range") !== -1}
                          />
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText
                            id="Auto Spotlight"
                            primary="Auto Spotlight"
                          />
                          <Switch
                            style={{ color: "#fff" }}
                            edge="end"
                            onChange={handleToggle("range")}
                            checked={checked.indexOf("range") !== -1}
                          />
                        </ListItem>
                      </div>
                      <ListItem>
                        <ListItemText
                          id="Auto Spotlight"
                          primary="We'll automatically feature your profile at peak visibility times to maximize exposure."
                        />
                      </ListItem>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText
                            id="Auto Spotlight"
                            primary="Auto Spotlight"
                          />
                          <Switch
                            style={{ color: "#fff" }}
                            edge="end"
                            onChange={handleToggle("range")}
                            checked={checked.indexOf("range") !== -1}
                          />
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText id="Location" primary="Location" />
                          <Button
                            style={{
                              fontFamily: "Poppins",
                              fontSize: "14px",
                              fontWeight: 500,
                              lineHeight: "21px",
                              letterSpacing: "0em",
                              textAlign: "center",
                              padding: "2px 10px 2px 10px",
                              textTransform: "none",
                              borderRadius: "20px",
                              color: "#fff",
                              background: "#df5166",
                            }}
                          >
                            Change Location
                          </Button>
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText
                            id="Video Autoplay Settings"
                            primary="Video Autoplay Settings"
                          />
                          <KeyboardArrowRightIcon />
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText
                            id="Notification Settings"
                            primary="Notification Settings"
                          />
                          <KeyboardArrowRightIcon />
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText
                            id="Contact & FAQ"
                            primary="Contact & FAQ"
                          />
                          <KeyboardArrowRightIcon />
                        </ListItem>
                      </div>
                      <div className={classes.listItemStyle}>
                        <ListItem>
                          <ListItemText
                            id="Security & Privacy"
                            primary="Security & Privacy"
                          />
                          <KeyboardArrowRightIcon />
                        </ListItem>
                      </div>
                    </List>
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
                    Apply Setting
                  </Button>
                </form>
              </Box>
            </Modal>
            <Modal open={profileModal} onClose={handleCloseEditModal}>
              <Box className={classes.innerContainer}>
                <div
                  style={{
                    overflowY: "scroll",
                    width: "90%",
                    WebkitOverflowScrolling: {
                      width: "0px",
                      display: "none",
                    },
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      backgroundColor: "transparent",
                      padding: 0,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "20px",
                        padding: 0,

                        fontFamily: "Poppins",
                        lineHeight: "24px",
                        color: "rgba(248, 72, 101, 1)",
                      }}
                    >
                      View Profile
                    </p>
                    <button
                      onClick={handleCloseEditModal}
                      style={{
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        color: "rgba(248, 72, 101, 1)",
                        fontSize: "20px",
                        padding: 0,
                        marginTop: "-2px",
                        alignItems: "flex-end",
                      }}
                    >
                      X
                    </button>
                  </div>

                  <Box
                    style={{ width: "100%", backgroundColor: "transparent" }}
                  >
                    <Grid
                      container
                      spacing={{ xs: 2, md: 2 }}
                      // columns={{ xs: 4, sm: 8, md: 12 }}
                      direction="column"
                      justifyContent="center"
                      // alignItems="center"
                    >
                      <Grid item xs={12} md={12} sx={{ padding: "5px" }}>
                        <img
                          src={ProfileImg}
                          alt=""
                          style={{
                            width: "100%",
                            height: "350px",
                            borderRadius: "5px",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        sx={
                          {
                            // display: "flex",
                          }
                        }
                      >
                        <div style={{ display: "flex" }}>
                          <Typography
                            style={{
                              fontFamily: "Poppins",
                              fontSize: "18px",
                              fontWeight: 500,
                              lineHeight: "24px",
                              letterSpacing: "0em",
                              textAlign: "left",
                              paddingLeft: "10px",
                              marginTop: "-10px",
                            }}
                          >
                            Daniel, 28
                          </Typography>

                          <CloudDoneOutlinedIcon
                            sx={{
                              color: "blue",
                              paddingLeft: "10px",
                              marginTop: "-20px",
                              fontSize: "40px",
                            }}
                          />
                        </div>
                        <div>
                          <Typography className={classes.typho}>
                            <img
                              src={CM}
                              alt=""
                              style={{
                                height: "15px",
                                width: "15px",
                              }}
                            />
                            <span style={{ padding: "5px" }}>170cm</span>
                          </Typography>
                          <Typography className={classes.typho}>
                            <img
                              src={Job}
                              alt=""
                              style={{
                                height: "15px",
                                width: "15px",
                              }}
                            />
                            <span style={{ padding: "5px" }}>
                              Software Developer
                            </span>
                          </Typography>
                          <Typography className={classes.typho}>
                            <img
                              src={College}
                              alt=""
                              style={{
                                height: "15px",
                                width: "15px",
                              }}
                            />{" "}
                            <span style={{ padding: "5px" }}>
                              Harvard University
                            </span>
                          </Typography>
                          <Typography className={classes.typho}>
                            <img
                              src={Location}
                              alt=""
                              style={{
                                height: "15px",
                                width: "15px",
                              }}
                            />{" "}
                            <span style={{ padding: "5px" }}>
                              Live in California
                            </span>
                          </Typography>
                          <Typography className={classes.typho}>
                            <img
                              src={Gender}
                              alt=""
                              style={{
                                height: "15px",
                                width: "15px",
                              }}
                            />{" "}
                            <span style={{ padding: "5px" }}>Man</span>
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            fontWeight: 500,
                            lineHeight: "24px",
                            letterSpacing: "0em",
                            textAlign: "left",

                            paddingLeft: "10px",
                          }}
                        >
                          My Interests
                        </Typography>
                        <Grid
                          container
                          className={classes.gridContainer}
                          spacing={2}
                        >
                          {items.map((item, index) => (
                            <Grid
                              item
                              xs={12}
                              sm={4}
                              md={4}
                              key={index}
                              style={{
                                height: "70px",
                              }}
                            >
                              <div className={classes.gridItem}>
                                {item.img}
                                <Typography
                                  variant="subtitle1"
                                  sx={{ fontSize: "12px" }}
                                >
                                  {item.text}
                                </Typography>
                              </div>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        sx={{
                          background:
                            "linear-gradient(0deg, #FEF5F7, #FEF5F7), linear-gradient(93.6deg, rgba(255, 106, 131, 0.78) 39.62%, rgba(252, 106, 130, 0.26) 147.48%)",
                          borderBottom: "1px solid",
                          borderImageSource:
                            "linear-gradient(93.6deg, rgba(255, 106, 131, 0.78) 39.62%, rgba(252, 106, 130, 0.26) 147.48%)",
                          boxShadow: "0px 1px 4px 0px rgba(248, 72, 101, 0.15)",
                        }}
                      >
                        <Typography
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            fontWeight: 500,
                            lineHeight: "24px",
                            letterSpacing: "0em",
                            textAlign: "left",

                            paddingLeft: "10px",
                          }}
                        >
                          About Me
                        </Typography>
                        <Typography
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            letterSpacing: "0em",
                            textAlign: "left",
                            paddingLeft: "10px",
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur. Gravida vitae
                          sem mauris lectus metus malesuada. Egestas facilisis
                          et viverra quis ac sed aliquam. Tincidunt mattis
                          rutrum fermentum laoreet commodo condimentum vulputate
                          consequat amet. Eget neque elit tellus velit rutrum
                          nec.
                        </Typography>
                      </Grid>
                    </Grid>
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
                    Save
                  </Button>
                </form>
              </Box>
            </Modal>
          </div>
          <List style={{ padding: "5px" }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  margin: 0,
                  padding: "0 0 0 5px",
                  borderRadius: "15px",
                  border: "1px solid rgba(241, 241, 241, 1)",
                  boxShadow:
                    "0px 0.8603281378746033px 3.441312551498413px 0px rgba(255, 108, 130, 0.3)",
                  "&:hover": {
                    backgroundColor: "#df2066",
                    color: "white",
                  },
                }}
              >
                <img src={SuperLike} alt="" />
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "14px", padding: "10px", width: "100%" }}
                    >
                      Super Likes - Get More
                    </Typography>
                  }
                />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  margin: 0,
                  padding: "0 0 0 5px",
                  borderRadius: "15px",
                  border: "1px solid rgba(241, 241, 241, 1)",
                  boxShadow:
                    "0px 0.8603281378746033px 3.441312551498413px 0px rgba(255, 108, 130, 0.3)",
                }}
              >
                <img src={Boost} alt="" />
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "14px", padding: "10px", width: "100%" }}
                    >
                      My Boosts - Get More
                    </Typography>
                  }
                />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  margin: 0,
                  padding: "0 0 0 5px",
                  borderRadius: "15px",
                  border: "1px solid rgba(241, 241, 241, 1)",
                  boxShadow:
                    "0px 0.8603281378746033px 3.441312551498413px 0px rgba(255, 108, 130, 0.3)",
                }}
              >
                <img src={Subscription} alt="" />
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "14px", padding: "10px", width: "100%" }}
                    >
                      My Subscription
                    </Typography>
                  }
                />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item xs={9}>
        <Typography
          style={{
            fontFamily: "Poppins",
            fontSize: "28px",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",
            paddingLeft: "10px",
            color: "rgba(95, 95, 95, 1)",
          }}
        >
          <span style={{ color: "rgba(248, 72, 101, 1" }}>Luvsi</span>Plans
        </Typography>
        <div
          style={{
            // backgroundImage: `url(${img})`,
            height: "90vh",
            borderRadius: "5px",
            padding: "5px",
            marginTop: "10px",
            // border: "2px solid pink",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box className={classes.boxStyle}>
                <Paper
                  elevation={6}
                  className={classes.cardStyle}
                  sx={{
                    mt: 1,
                    background: `
                  linear-gradient(95.41deg, rgba(175, 172, 167, 0.1) 64.58%, rgba(175, 172, 167, 0.025) 100%),
                  linear-gradient(0deg, #F1F1F1, #F1F1F1)
                `,
                  }}
                  onClick={() => {
                    setChildData("Platinum");
                    DataToParentOnClick();
                  }}
                >
                  <Box>
                    <img src={Platinum} alt="" />
                    <p
                      style={{
                        color: "rgba(95, 95, 95, 1)",
                        font: "Poppins",
                        Weight: 600,
                        Size: "18px",
                        lineHeight: "0",
                      }}
                    >
                      <span
                        style={{
                          // background: "grey",
                          color: "rgba(175, 172, 167, 1)",
                          marginLeft: "5px",
                          padding: "5px",
                          font: "Poppins",
                          Weight: 600,
                          Size: "18px",
                        }}
                      >
                        Luvsi
                      </span>
                      Platinum Plan
                    </p>
                    <p>See who like you and more!</p>
                    <Button
                      style={{
                        background:
                          "linear-gradient(93.6deg, #AFACA7 39.62%, rgba(175, 172, 167, 0.25) 147.48%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#fff",
                        textTransform: "none",
                        width: "200px",
                      }}
                    >
                      Get Luvsi Platinum
                    </Button>
                  </Box>
                </Paper>
                <Paper
                  elevation={6}
                  className={classes.cardStyle}
                  sx={{
                    background: `
                  linear-gradient(95.41deg, rgba(210, 190, 4, 0.1) 64.58%, rgba(210, 190, 4, 0.025) 100%),
                  linear-gradient(0deg, #F1F1F1, #F1F1F1)
                `,
                  }}
                  onClick={() => {
                    setChildData("Gold");
                    DataToParentOnClick();
                  }}
                >
                  <Box>
                    <img src={Gold} alt="" />
                    <p
                      style={{
                        color: "rgba(95, 95, 95, 1)",
                        font: "Poppins",
                        Weight: 600,
                        Size: "18px",
                        lineHeight: "0",
                      }}
                    >
                      <span
                        style={{
                          // background: "#FFD700",
                          color: "rgba(210, 190, 4, 1)",
                          marginLeft: "5px",
                          padding: "5px",
                          font: "Poppins",
                          Weight: 500,
                          Size: "18px",
                        }}
                      >
                        Luvsi
                      </span>
                      Gold Plan
                    </p>
                    <p>See who like you and more!</p>
                    <Button
                      style={{
                        background:
                          "linear-gradient(93.6deg, #D2BE04 39.62%, rgba(210, 190, 4, 0.25) 147.48%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#fff",
                        textTransform: "none",
                        width: "200px",
                      }}
                    >
                      Get Luvsi Gold
                    </Button>
                  </Box>
                </Paper>
                <Paper
                  elevation={6}
                  className={classes.cardStyle}
                  sx={{
                    background:
                      "linear-gradient(97.82deg, rgb(255 108 130 / 17%) 0%, rgb(255 108 130 / 8%) 75.17%)",
                  }}
                  onClick={() => {
                    setChildData("Plus");
                    DataToParentOnClick();
                  }}
                >
                  <Box>
                    <img src={Plus} alt="" />
                    <p
                      style={{
                        color: "rgba(95, 95, 95, 1)",
                        font: "Poppins",
                        Weight: 600,
                        Size: "18px",
                        lineHeight: "0",
                      }}
                    >
                      <span
                        style={{
                          // background: "#FFD700",
                          color: "rgba(248, 72, 101, 1)",
                          marginLeft: "5px",
                          padding: "5px",
                          font: "Poppins",
                          Weight: 500,
                          Size: "18px",
                        }}
                      >
                        Luvsi
                      </span>
                      Plus Plan
                    </p>
                    <p>See who like you and more!</p>
                    <Button
                      style={{
                        background:
                          "linear-gradient(93.6deg, rgba(255, 106, 131, 0.78) 39.62%, rgba(252, 106, 130, 0.26) 147.48%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#fff",
                        textTransform: "none",
                        width: "200px",
                      }}
                    >
                      Get Luvsi Plus
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default Profile;
