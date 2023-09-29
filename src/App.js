
import Header from "./components/Header";
import OTPInput from "./screens/OTPInput";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import MobileNo from "./components/MobileNo";
import Home from "./components/Home";
import ForgetPassword from "./screens/ForgetPassword";
import RegistrationForm from "./screens/RegistrationForm";
import ResetPasswordForm from "./screens/ResetPasswordForm";
import LuvsiCards from "./components/LuvsiCards";
import SignIn from "./screens/SignIn";
import LandingPage from "./components/LandingPage";
import ProfileForm from "./screens/ProfileForm";
import Dashboard from "./components/Dashboard";
import ChatPreview from "./components/chat/Home";
import ProfileSection from "./screens/ProfileSection";
import MapComponent from "./components/MapComponent";
import SwipeButton from "./components/SwipeButton";
import VideoCallStart from "./components/Video Chat/VideoCallStart";
import AudioCall from "./components/AudioCall";
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
          <Route exact path="/chat" element={<ChatPreview/>} />
          <Route exact path="/video-call" element={<VideoCallStart/>} />
          <Route exact path="/audio-call" element={<AudioCall/>} />
          <Route exact path="/map" element={<MapComponent/>} />
          <Route exact path="/luvsiCard" element={<><LuvsiCards/>
           
          <SwipeButton/></>} />
        </Routes>
        {/* <Footer className="header" /> */}
      </Router>
    </div>
  );
}

export default App;
