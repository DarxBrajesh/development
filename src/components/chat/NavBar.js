import React from "react";
// import React, { useContext } from 'react'
// import {signOut} from "firebase/auth"
// import { auth } from '../../firebase'
// import { AuthContext } from '../context/AuthContext'
import HomeIcon from "../../assets/homeIcon.png";
const Navbar = () => {
  //   const {currentUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      {/* <span className="logo">LogoChat</span> */}
      {/* <img src={HomeIcon} alt="" /> */}
      <div className="user">
        {/* <img
          src="https://e1.pxfuel.com/desktop-wallpaper/46/855/desktop-wallpaper-radhe-salman-khan-salman-khan.jpg"
          alt=""
          style={{ height: "50px", width: "50px", borderRadius: "50%" }}
        /> */}
        {/* <span>{currentUser.displayName}</span> */}
        <span>Messages</span>
        {/* <button onClick={()=>signOut(auth)}>logout</button> */}
        {/* <button className="btn">logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;
