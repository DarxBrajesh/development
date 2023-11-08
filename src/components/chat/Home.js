import React from "react";
import Sidebar from "./SideBar";
import Chat from "./Chat";
import img from "../../assets/home.png";
const Home = () => {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${img})`, height: "100vh" }}
    >
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
