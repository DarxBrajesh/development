import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import HomeIcon from "../assets/homeIcon.png";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MapIcon from "@mui/icons-material/Map";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LuvsiCards from "../components/LuvsiCards";
import MapComponent from "../components/MapComponent";
import { Grid, Paper } from "@material-ui/core";
// import ProfileForm from "./ProfileForm";
import { Link } from "react-router-dom";
import Subscription from "./Subscription";
import GoldSubscription from "../components/subscription/GoldSubscription";
import Chat from "../components/chat/Home";
import PlatinumSubscription from "../components/subscription/PlatinumSubscription";
import PlusCard from "../components/subscription/PlusCard";
import Linke from "./Like";
import { makeStyles } from "@material-ui/core";
// import { styled } from "@mui/material/styles";
import Profile from "../components/Profile";
const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
    outline: "1px solid slategrey",
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const DashboardScreen = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menudata, setMenudata] = useState("explore");
  const [dataFromChild, setDataFromChild] = useState(null);
  const [isSecondaryVisible, setSecondaryVisible] = useState(false);

  let Email = window.sessionStorage.getItem("email");

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let kk = sessionStorage.getItem("goldSubscription");
  console.log(kk);

  const [checked, setChecked] = useState(["range"]);
  const handleClick = () => {
    setSecondaryVisible(!isSecondaryVisible);
  };

  const receiveDataFromChild = (data) => {
    setDataFromChild(data);
    setMenudata("");
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
  return (
    <>
      <Box sx={{ display: "flex", width: "99%", padding: "10px" }}>
        <CssBaseline />
        {/* <AppBar
          position="fixed"
          sx={{
            // background: "#fff",
            background: "rgba(255, 149, 166, 0.9)",
            // background: `url(${img}) center center/cover`,
            color: "#2f2f2f",
            width: "100%",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <img
                src={HomeIcon}
                alt=""
                style={{ width: "125px", height: "50px" }}
              />
               <Header /> 
            </Box>
          </Toolbar>
        </AppBar> */}
        {/* <Drawer variant="permanent" open={open}> */}
        {/* <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader> */}

        {/* <Divider /> */}

        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div
              style={{
                // background: "green",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                height: "95vh",
                // padding: "5px",
                border: "2px solid rgba(255, 149, 166, 0.9)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "80px",
                  padding: "20px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  background:
                    "linear-gradient(97.82deg, rgba(255, 149, 166, 0.9) 0%, #FF3B5C 75.17%)",
                }}
              >
                <img
                  src={HomeIcon}
                  alt=""
                  style={{ width: "125px", height: "50px" }}
                />
              </div>
              <List>
                <ListItem disablePadding onClick={() => setMenudata("explore")}>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon sx={{ color: "#df2066" }} />
                    </ListItemIcon>
                    <ListItemText primary="Explore " />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => setMenudata("map")}>
                  <ListItemButton>
                    <ListItemIcon>
                      <MapIcon sx={{ color: "#df2066" }} />
                    </ListItemIcon>
                    <ListItemText primary="Map" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => setMenudata("Like")}>
                  <ListItemButton
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                  >
                    <ListItemIcon>
                      <FavoriteIcon sx={{ color: "#df2066" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Like"
                      secondary={isSecondaryVisible ? `${Email}` : ""}
                    ></ListItemText>
                  </ListItemButton>
                </ListItem>

                <ListItem
                  disablePadding
                  onClick={() => setMenudata("messages")}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <MessageIcon sx={{ color: "#df2066" }} />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => setMenudata("profile")}>
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonIcon sx={{ color: "#df2066" }} />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={10}>
            <div
              style={{
                // backgroundImage: `url(${img})`,
                height: "95vh",
                borderRadius: "5px",
                padding: "5px",
                // border: "2px solid pink",
              }}
            >
              <Box
                component="main"
                sx={{ flexGrow: 1 }}
                // style={{ marginTop: "80px" }}
              >
                {/* {menudata === "profileForm" && <ProfileForm />} */}
                {dataFromChild === "Gold" && <GoldSubscription />}
                {dataFromChild === "Platinum" && <PlatinumSubscription />}
                {dataFromChild === "Plus" && <PlusCard />}
                {menudata === "explore" && <LuvsiCards />}
                {menudata === "messages" && <Chat />}
                {menudata === "map" && <MapComponent />}
                {menudata === "Like" && <Linke />}
                {menudata === "profile" && <Profile />}
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardScreen;
