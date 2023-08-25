import Footer from "./components/Footer";
import Header from "./components/Header";
import OTPInput from "./components/OTPInput";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import MobileNo from "./components/MobileNo";
import Home from "./components/Home";
import ForgetPassword from "./components/ForgetPassword";
import RegistrationForm from "./components/RegistrationForm";
import ResetPasswordForm from "./components/ResetPasswordForm";

import SignIn from "./components/SignIn";
import LandingPage from "./components/LandingPage";
import ProfileForm from "./components/ProfileForm";
import Dashboard from "./components/Dashboard";
import ChatComponent from "./components/ChatComponent";
import ProfileSection from "./components/ProfileSection";
import VideoCallComponent from "./components/Video Chat/VideoChat";
import LuvsiCardHandler from "./components/LuvsiCardHandler";
import MapComponent from "./components/MapComponent";
function App() {
  return (
    <div className="App grid-container">
      <Router>
        <Header className="header" />
        <Routes>
        <Route path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/otpinput" element={<OTPInput />} />
          <Route exact path="/mobileno" element={<MobileNo />} />
          <Route exact path="/forgetpassword" element={<ForgetPassword />} />
          <Route exact path="/sign-up" element={<RegistrationForm/>} />
          <Route exact path="/resetpassword" element={<ResetPasswordForm/>} />
          <Route exact path="/sign-in" element={<SignIn/>} />
          <Route exact path="/profileform" element={<ProfileForm/>} />
          <Route exact path="/profilesection" element={<ProfileSection/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/chat" element={<ChatComponent/>} />
          <Route exact path="/video-call" element={<VideoCallComponent/>} />
          <Route exact path="/LuvsiCardHandler" element={<LuvsiCardHandler/>} />
          <Route exact path="/map" element={<MapComponent/>} />
        </Routes>
        {/* <Footer className="header" /> */}
      </Router>
    </div>
  );
}

export default App;
