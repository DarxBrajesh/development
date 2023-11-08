import { useEffect, useState } from "react";
// import ChatContainer from '../components/ChatContainer'
import { useCookies } from "react-cookie";
import axios from "axios";
import img from "../assets/home2.png";
import { Box, Button, Container } from "@mui/material";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Dashboard = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);

  const routeChange = () => {
    let path = `/MobileNo`;
    navigate(path);
  };

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        p: { xs: 2, sm: 5, md: 2 },
        background: `url(${img}) center center/cover`,
        minHeight: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Header />
      </Box>
      {/* <Header /> */}
      {/* <img src={homeText} alt="" /> */}

      <div
        style={{
          backgroundPosition: "center",
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          tabSize: "center",
        }}
        loading="lazy"
      >
        <h1
          style={{
            fontSize: "50px",
            padding: "5px",
            color: "#fff",
          }}
        >
          Dashboard comming soon......
        </h1>
      </div>
    </Container>
  );
};
export default Dashboard;
