import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import DistanceSlider from "../components/DistanceSlider";
import AgeRangeSlider from "../components/AgeRangeSlider";
import RestoreIcon from "@mui/icons-material/Restore";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SourceIcon from "@mui/icons-material/Source";
import CastConnectedIcon from "@mui/icons-material/CastConnected";
import LaunchIcon from "@mui/icons-material/Launch";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SwipeButton from "../components/SwipeButton";
import LuvsiCards from "../components/LuvsiCards";
// import ProfileForm from "./ProfileForm";
import { Link } from "react-router-dom";
import Subscription from "./Subscription";
import GoldSubscription from "../components/subscription/GoldSubscription";
import PlatinumSubscription from "../components/subscription/PlatinumSubscription";
import PlusCard from "../components/subscription/PlusCard";
const drawerWidth = 340;

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
const ProfileSection = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menudata, setMenudata] = useState("cards");
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
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ background: "#fff", color: "#2f2f2f" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Luvshi
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />
          <Subscription sendDataToParent={receiveDataFromChild} />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>
            Discovery Settings
          </h3>
          <List>
            <ListItem disablePadding onClick={() => setMenudata("profileForm")}>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
                <ListItemText primary="Manage Payment Account " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <RestoreIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
                <ListItemText primary="Restore Purchases" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                <ListItemIcon>
                  <AttachEmailIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary={isSecondaryVisible ? `${Email}` : ""}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PhoneInTalkIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
                <ListItemText primary="Phone Number" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CastConnectedIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
                <ListItemText primary="Connected Accounts" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SourceIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
                <ListItemText primary="Promo Code" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>
            Discovery Settings
          </h3>
          <List>
            <ListItem>
              <ListItemText id="Location" primary="Location" />
            </ListItem>
            <ListItem>
              <ListItemText
                id="distance-preference"
                primary="Distance Preference"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                id="only-show-people-in-this-range"
                primary="Only show people in this range"
              />
              <Switch
                style={{ color: "#df2066" }}
                edge="end"
                onChange={handleToggle("range")}
                checked={checked.indexOf("range") !== -1}
              />
            </ListItem>
            <ListItem>
              <DistanceSlider />
            </ListItem>
            <ListItem>
              <ListItemText id="looking-for" primary="Looking for" />
              <p>Male</p>
            </ListItem>

            <ListItem>
              <ListItemText id="age-preference" primary="Age Preference" />
            </ListItem>
            <ListItem>
              <AgeRangeSlider />
            </ListItem>
          </List>
          <Divider />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>
            Control Who You See
          </h3>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Blananced Recommendations " />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemText primary="See the most relevant people to you " />
            </ListItem>
          </List>
          <Divider />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>
            Read Receipts
          </h3>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Reacently" />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>
            Activity Status
          </h3>
          <List style={{ marginTop: "-20px" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Email " />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Push Notifications " />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>
            Notifications
          </h3>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Email " />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Push Notifications " />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>
            Dark Mode
          </h3>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Use Ststem Setting " />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Light Mode " />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Dark Mode " />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>
            Display Preference
          </h3>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Language" />
                <ListItemText primary="English " />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Show Distances in " />
                <ListItemText primary="K.M. " />
                <ListItemIcon>
                  <KeyboardArrowRightIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>
            Help & Support
          </h3>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Help & Support" />
                <ListItemIcon>
                  <LaunchIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>Safety</h3>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Settings " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/privacy-policy">
                <ListItemText primary="Safety & Policy " />
                <ListItemIcon>
                  <LaunchIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/safety-Tips">
                <ListItemText primary="safety Tips " />
                <ListItemIcon>
                  <LaunchIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/community">
                <ListItemText primary="Community Guidelines " />
                <ListItemIcon>
                  <LaunchIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
          <h3 style={{ paddingLeft: "15px", background: "#f0f2f4" }}>Legal</h3>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="PCookie Policy " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/services-policy">
                <ListItemText primary="SPrivacy Policy " />
                <ListItemIcon>
                  <LaunchIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="safety Tips " />
                <ListItemIcon>
                  <LaunchIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>{" "}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/safety-Tips">
                <ListItemText primary="CTerms of Service " />
                <ListItemIcon>
                  <LaunchIcon sx={{ color: "#df2066" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Divider />
            <h3
              style={{
                background: "#f0f2f4",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Share Luvsi
            </h3>
            <Divider />
            <h3
              style={{
                background: "#f0f2f4",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Logout
            </h3>
            <Divider />
            <h3
              style={{
                background: "#f0f2f4",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Delete Account
            </h3>
            <Divider />
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 2 }}
          style={{ marginTop: "80px" }}
        >
          {/* {menudata === "profileForm" && <ProfileForm />} */}
          {dataFromChild === "Gold" && <GoldSubscription />}
          {dataFromChild === "Platinum" && <PlatinumSubscription />}
          {dataFromChild === "Plus" && <PlusCard />}
          {menudata === "cards" && <LuvsiCards />}
        </Box>
      </Box>
    </>
  );
};

export default ProfileSection;
