import React from "react";
import Cam from "../img/cam.png";
import Call from "../img/phone.svg";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { makeStyles } from "@material-ui/core";
import WifiCalling3RoundedIcon from "@mui/icons-material/WifiCalling3Rounded";
import DuoRoundedIcon from "@mui/icons-material/DuoRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

import { Navigate } from "react-router-dom";
// import { ChatContext } from "../context/ChatContext";
const useStyles = makeStyles((theme) => ({
  btn: {
    background: "#df2066",
    color: "#f1f1f1",
    borderRadius: "50%",
    padding: "5px",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
}));
const Chat = () => {
  const classes = useStyles();
  // const { data } = useContext(ChatContext);
  const Videocall = () => {
    window.location.href = "/video-call";
  };
  const Audiocall = () => {
    window.location.href = "/audio-call";
  };
  return (
    <div className="chat">
      <div className="chatInfo">
        {/* <span>{data.user?.displayName}</span> */}
        <span>Brajesh</span>
        <div className="chatIcons">
          <WifiCalling3RoundedIcon
            onClick={Audiocall}
            // style={{
            //   background: "#df2066",
            //   color: "#f1f1f1",
            //   borderRadius: "50%",
            //   padding: "5px",
            //   width: "40px",
            //   height: "40px",
            // }}
            className={classes.btn}
          />
          <DuoRoundedIcon className={classes.btn} />
          <MoreVertRoundedIcon className={classes.btn} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
