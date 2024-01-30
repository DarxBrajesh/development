import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
// import { database } from "../../firebase";
import avtar from "../img/avtar.jpg";
const Chats = () => {
  const [chats, setChats] = useState([]);

  // const { currentUser } = useContext(AuthContext);
  // const { dispatch } = useContext(ChatContext);

  return (
    <div className="chats">
      {/* {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => ( */}
      <div
        className="userChat"
        // key={chat[0]}
        // onClick={() => handleSelect(chat[1].userInfo)}
        // onClick={() => handleSelect()}
      >
        <img src={avtar} alt="" style={{ width: "150px", height: "150px" }} />
        <div className="userChatInfo">
          {/* <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p> */}

          <span style={{ lineHeight: "5px" }}>Amit</span>
          <p style={{ lineHeight: "5px" }}>hi bro ....</p>
        </div>
      </div>

      <div className="userChat">
        <img src={avtar} alt="" style={{ width: "150px", height: "150px" }} />
        <div className="userChatInfo">
          <span style={{ lineHeight: "5px" }}>bk</span>
          <p style={{ lineHeight: "5px" }}>hello....</p>
        </div>
      </div>

      <div className="userChat">
        <img src={avtar} alt="" style={{ width: "150px", height: "150px" }} />
        <div className="userChatInfo">
          <span style={{ lineHeight: "5px" }}>Aman</span>
          <p style={{ lineHeight: "5px" }}>hi sir....</p>
        </div>
      </div>

      <div className="userChat">
        <img src={avtar} alt="" style={{ width: "150px", height: "150px" }} />
        <div className="userChatInfo">
          <span style={{ lineHeight: "5px" }}>Rahul</span>
          <p style={{ lineHeight: "5px" }}>hi rahul ....</p>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Chats;
