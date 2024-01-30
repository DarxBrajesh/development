import React from "react";
import Navbar from "./NavBar";
import Search from "./Search";
import Chats from "./Chats";
import { Padding } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <Navbar /> */}
      <p
        style={{
          padding: "10px",
          fontSize: "20px",
          lineHeight: "5px",
          color: "rgb(223, 32, 102)",
        }}
      >
        Messages
      </p>
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
