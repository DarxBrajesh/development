import React from "react";
import { useState } from "react";
import LuvsiCard from "react-tinder-card";
import "../styles/LuvsiCards.css";
import Like from "../assets/Like.png";
import Dislike from "../assets/Dislike.png";
import superlike from "../assets/Super-Like.png";

import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import CM from "../assets/cm.png";
import Location from "../assets/location.png";
import College from "../assets/college.png";
import Gender from "../assets/gender.png";
import Job from "../assets/job.png";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import Mouth from "../assets/mouth.png";
import Karaoke from "../assets/karaoke.png";
import Baseball from "../assets/baseball.png";
import Basketball from "../assets/basketball-ball.png";
import Note from "../assets/notes.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@material-ui/core";
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
const LuvsiCards = () => {
  const classes = useStyles();
  const [cardStatuses, setCardStatuses] = useState({});

  const handleLikeClick = (personName) => {
    // Update the state to mark the card as liked
    setCardStatuses({ ...cardStatuses, [personName]: "liked" });
    const status = cardStatuses[personName];
    // Other actions related to liking the card
  };

  const handleDislikeClick = (personName) => {
    // Update the state to mark the card as disliked
    setCardStatuses({ ...cardStatuses, [personName]: "disliked" });
    const status = cardStatuses[personName];
    // Other actions related to disliking the card
  };

  const handleSuperLikeClick = (personName) => {
    // Update the state to mark the card as superliked
    setCardStatuses({ ...cardStatuses, [personName]: "superliked" });
    const status = cardStatuses[personName];
    // Other actions related to superliking the card
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
  const renderButtons = (personName) => {
    const status = cardStatuses[personName];
    if (status === "liked") {
      return (
        <button
          onClick={() => handleLikeClick(personName)}
          style={{ filter: "blur(3px)", backgroundColor: "goldenrod" }}
        >
          <img src={Dislike} alt="" style={{ height: "40px", width: "40px" }} />
        </button>
      );
    } else if (status === "disliked") {
      return (
        <button
          onClick={() => handleDislikeClick(personName)}
          style={{ filter: "blur(3px)", backgroundColor: "red" }}
        >
          <img src={Dislike} alt="" style={{ height: "40px", width: "40px" }} />
        </button>
      );
    } else if (status === "superliked") {
      return (
        <button
          onClick={() => handleSuperLikeClick(personName)}
          style={{ filter: "blur(3px)", backgroundColor: "gold" }}
        >
          <img src={Dislike} alt="" style={{ height: "40px", width: "40px" }} />
        </button>
      );
    } else {
      return null; // No button shown if status is not set
    }
  };

  const [people, setPeople] = useState([
    {
      name: "Hansika1",
      url: "https://movietickets4u.in/wp-content/uploads/2022/12/shruti-haasan.jpg",
      Working: "Hansika1! Working as a dental",
      studies: "studies at Saint Helena University",
      height: "5.4",
      job: "Software Developer",
      university: "Harvard University",
      location: "Live in California",
      Looking_for: "Man",
    },
    {
      name: "aishwarya",
      url: "https://wallpaperaccess.com/full/1279777.jpg",
      Working: "aishwarya! Working as a dental",
      studies: "studies at Saint Helena University",
      height: "5.3",
      job: "Software Developer",
      university: "Harvard University",
      location: "Live in California",
      Looking_for: "Man",
    },
    {
      name: "Salman",
      url: "https://e1.pxfuel.com/desktop-wallpaper/46/855/desktop-wallpaper-radhe-salman-khan-salman-khan.jpg",
      Working: "Salman! Working as a dental",
      studies: "studies at Saint Helena University",
      height: "5.9",
      job: "Software Developer",
      university: "Harvard University",
      location: "Live in California",
      Looking_for: "Man",
    },
    {
      name: "aishwarya",
      url: "https://movietickets4u.in/wp-content/uploads/2022/12/shruti-haasan.jpg",
      Working: "aishwarya! Working as a dental",
      studies: "studies at Saint Helena University",
      height: "5.6",
      job: "Software Developer",
      university: "Harvard University",
      location: "Live in California",
      Looking_for: "Man",
    },
    {
      name: "salman",
      url: "https://e1.pxfuel.com/desktop-wallpaper/181/356/desktop-wallpaper-salman-khan-by-evilstarsai-salman-khan-wanted.jpg",
      Working: "salman! Working as a dental",
      studies: "studies at Saint Helena University",
      height: "5.8",
      job: "Software Developer",
      university: "Harvard University",
      location: "Live in California",
      Looking_for: "Women",
    },
    {
      name: "aishwarya",
      url: "https://wallpaperaccess.com/full/1279777.jpg",
      Working: "aishwarya! Working as a dental",
      studies: "studies at Saint Helena University",
      height: "5.5",
      job: "Software Developer",
      university: "Harvard University",
      location: "Live in California",
      Looking_for: "Man",
    },
  ]);

  return (
    <div>
      <div className="luvsiCards_cardContainer">
        {people.map((person) => (
          <LuvsiCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            style={{
              position: "relative" /* Make the card position relative */,
              overflow: "hidden" /* Hide overflow to contain overlay */,
            }}
          >
            <Grid
              container
              spacing={2}
              style={{
                background: "#FDDDE6",
                borderRadius: "20px",
                // border: "2px solid blue",
                width: "70%",
              }}
            >
              <Grid
                item
                xs={6}
                md={6}
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography
                  sx={{
                    color: "#f84865 !important",
                    fontSize: "20px",
                    display: "flex",
                  }}
                >
                  {person.name},28
                  <CloudDoneOutlinedIcon
                    sx={{
                      color: "rgba(248, 72, 101, 1) !important",
                      paddingLeft: "10px",
                      // marginTop: "20px",
                      fontSize: "33px",
                    }}
                  />
                </Typography>

                <List
                  style={{
                    lineHeight: "0px !important",
                    fontSize: "12px !important",
                    // border: "2px solid blue",
                    height: "80%",
                    width: "80%",
                    padding: "0px 0px 0px 10px",
                  }}
                >
                  <ListItem
                    sx={{
                      padding: "0px !important",
                      fontFamily: "Poppins !important",
                      fontSize: "12px !important",
                      fontWeight: 400,
                      lineHeight: "20px !important",
                      letterSpacing: "0em !important",
                      textAlign: "left !important",
                    }}
                  >
                    <ListItemText primary={`${person.Working}`} />
                  </ListItem>
                  <ListItem
                    sx={{
                      padding: "0px !important",
                      fontFamily: "Poppins !important",
                      fontSize: "12px !important",
                      fontWeight: 400,
                      lineHeight: "20px !important",
                      letterSpacing: "0em !important",
                      textAlign: "left !important",
                    }}
                  >
                    <ListItemText primary={`${person.studies}`} />
                  </ListItem>
                  <ListItem style={{ padding: "0px" }}>
                    <ListItemIcon sx={{ width: "30px" }}>
                      <img
                        src={CM}
                        alt=""
                        style={{
                          height: "15px",
                          width: "15px",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={`Height: ${person.height}`} />
                  </ListItem>
                  <ListItem style={{ padding: "0px" }}>
                    <ListItemIcon sx={{ width: "30px !important" }}>
                      <img
                        src={Job}
                        alt=""
                        style={{
                          height: "15px",
                          width: "15px",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={`Job: ${person.job}`} />
                  </ListItem>
                  <ListItem style={{ padding: "0px" }}>
                    <ListItemIcon sx={{ width: "30px !important" }}>
                      <img
                        src={College}
                        alt=""
                        style={{
                          height: "15px",
                          width: "15px",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={`University: ${person.university}`}
                    />
                  </ListItem>
                  <ListItem style={{ padding: "0px" }}>
                    <ListItemIcon sx={{ width: "30px !important" }}>
                      <img
                        src={Location}
                        alt=""
                        style={{
                          height: "15px",
                          width: "15px",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={`Studies: ${person.location}`} />
                  </ListItem>
                  <ListItem style={{ padding: "0px" }}>
                    <ListItemIcon
                      sx={{
                        maxWidth: "20px !important",
                      }}
                    >
                      <img
                        src={Gender}
                        alt=""
                        style={{
                          height: "15px",
                          width: "15px",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={`Location: ${person.Looking_for}`} />
                  </ListItem>

                  <Grid item xs={12} md={6}>
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
                </List>
              </Grid>
            </Grid>

            {/* <div style={{ display: "flex" }}>
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
              <div style={{ width: "50%", background: "blue" }}>
                <p>hello card</p>
              </div>
            </div> */}
            <div
              style={{
                position: "relative",

                width: "70%",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  // marginTop: "-20px",
                  width: "100%",
                  borderRadius: "0 0 20px 20px",
                  background: "#FDDDE6",
                  zIndex: "-1",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "absolute",
                    width: "32%",
                    padding: "5px 5px 0px 5px",
                    borderRadius: "40px",
                    marginTop: "5%",
                    // backgroundColor: "rgba(255, 108, 130, 0.4)",
                    backgroundColor:
                      cardStatuses === "liked"
                        ? "rgba(173, 216, 230, 0.7)" // Change background color when liked
                        : "rgba(255, 108, 130, 0.4)",
                    zIndex: cardStatuses ? 2 : 1,
                  }}
                >
                  {/* {renderButtons(person.name)} */}

                  <Grid item xs={2} md={2}>
                    <button
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                        margin: "0",
                        padding: "0",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDislikeClick(person.name)}
                    >
                      <img
                        src={Dislike}
                        alt=""
                        style={{ height: "40px", width: "40px" }}
                      />
                    </button>
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <button
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                        margin: "0",
                        padding: "0",
                        cursor: "pointer",
                        zIndex: cardStatuses === "liked" ? 3 : 2,
                      }}
                      onClick={() => handleLikeClick(person.name)}
                    >
                      <img
                        src={Like}
                        alt=""
                        style={{ height: "40px", width: "40px" }}
                      />
                    </button>
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <button
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                        margin: "0",
                        padding: "0",
                        cursor: "pointer",
                        zIndex: cardStatuses === "liked" ? 3 : 2,
                      }}
                      onClick={() => handleSuperLikeClick(person.name)}
                    >
                      <img
                        src={superlike}
                        alt=""
                        style={{ height: "40px", width: "40px" }}
                      />
                    </button>
                  </Grid>

                  {cardStatuses[person.name] === "disliked" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-350%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Cross button content */}
                      <div
                        onClick={() => handleDislikeClick(person.name)}
                        style={{
                          width: "830px",
                          height: "450px",
                          background:
                            "linear-gradient(180deg in hsl shorter hue, red, red)",
                          opacity: 0.5,
                          marginTop: "-72px",
                          marginLeft: "-35px",
                          borderRadius: "20px",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          justifyContent: "center",
                          zIndex: -1,
                        }}
                      >
                        <img
                          src={Dislike}
                          alt=""
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "none",
                            margin: "0",
                            padding: "0",
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {cardStatuses[person.name] === "liked" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-350%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Cross button content */}
                      <div
                        onClick={() => handleDislikeClick(person.name)}
                        style={{
                          width: "830px",
                          height: "450px",
                          background:
                            "linear-gradient(180deg in hsl shorter hue, red, blue)",
                          opacity: 0.5,
                          marginTop: "-72px",
                          marginLeft: "-35px",
                          borderRadius: "20px",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          justifyContent: "center",
                          zIndex: -1,
                        }}
                      >
                        <img
                          src={Like}
                          alt=""
                          style={{ height: "40px", width: "40px" }}
                        />
                      </div>
                    </div>
                  )}
                  {cardStatuses[person.name] === "superliked" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-350%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Cross button content */}
                      <div
                        onClick={() => handleDislikeClick(person.name)}
                        style={{
                          width: "830px",
                          height: "450px",
                          // background:
                          //   "linear-gradient(180deg in oklab, white, orange)",
                          background:
                            "linear-gradient(180deg in hsl shorter hue, yellow, orange)",
                          opacity: 0.5,
                          marginTop: "-72px",
                          marginLeft: "-35px",
                          borderRadius: "20px",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          justifyContent: "center",
                          zIndex: -1,
                        }}
                      >
                        <img
                          src={superlike}
                          alt=""
                          style={{ height: "40px", width: "40px" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Grid>
            </div>
          </LuvsiCard>
        ))}
      </div>
    </div>
  );
};

export default LuvsiCards;
