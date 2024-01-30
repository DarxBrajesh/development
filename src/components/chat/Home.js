import React from "react";
import Sidebar from "./SideBar";
import Chat from "./Chat";
import img from "../../assets/msgbg.png";
import { Grid } from "@material-ui/core";
const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <div
          style={{
            // background: "green",
            borderRadius: "5px",
            height: "95vh",
            padding: "5px",
            border: "2px solid pink",
          }}
        >
          <Sidebar />
        </div>
      </Grid>
      <Grid item xs={9}>
        <div
          style={{
            // backgroundImage: `url(${img})`,
            height: "95vh",
            borderRadius: "5px",
            padding: "5px",
            border: "2px solid pink",
          }}
        >
          <Chat />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
