import React, { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

const Message = (props) => {
  const { message, children } = props;
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  return (
    <div
      // ref={ref}
      // className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      {
        children
      }
      <div className="messageInfo">
        <img
          // src={
          //   message.senderId === currentUser.uid
          //     ? currentUser.photoURL
          //     : data.user.photoURL
          // }
          src='https://e1.pxfuel.com/desktop-wallpaper/46/855/desktop-wallpaper-radhe-salman-khan-salman-khan.jpg'
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        {/* <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />} */}

        <p>message_text</p>
         <img src='https://e1.pxfuel.com/desktop-wallpaper/46/855/desktop-wallpaper-radhe-salman-khan-salman-khan.jpg' alt="" />
      </div>
    </div>
  );
};

export default Message;