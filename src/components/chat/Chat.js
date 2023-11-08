import React from "react";
import Cam from "../img/cam.png";
import Call from "../img/phone.svg";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

import { Navigate } from "react-router-dom";
// import { ChatContext } from "../context/ChatContext";

const Chat = () => {
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
          <img
            src={Call}
            alt=""
            onClick={Audiocall}
            style={{ height: "50px", width: "25px" }}
          />
          <img src={Cam} alt="" onClick={Videocall} />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
