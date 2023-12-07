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
import SafetyTips from "./screens/SafetyTips";
import Safetypolicy from "./screens/Safetypolicy";
import Community from "./screens/Community";
import LocationScreen from "./screens/LocationScreen";
import FinishScreen from "./screens/FinishScreen.js";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo.js";
import ScreenFourth from "./screens/ScreenFourth.js";
import ImageScreen from "./screens/ImageScreen.js";
function App() {
  return (
    <div className="App grid-container">
      <Router>
        {/* <Header className="header" /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/otpinput" element={<OTPInput />} />
          <Route exact path="/mobileno" element={<MobileNo />} />
          <Route exact path="/forgetpassword" element={<ForgetPassword />} />
          <Route exact path="/sign-up" element={<RegistrationForm />} />
          <Route exact path="/resetpassword" element={<ResetPasswordForm />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/profileform" element={<ProfileForm />} />
          <Route exact path="/profilesection" element={<ProfileSection />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Route exact path="/" element={<ChatPreview />} /> */}
          <Route exact path="/screen-one" element={<ScreenOne />} />
          <Route exact path="/screen-two" element={<ScreenTwo />} />
          <Route exact path="/screen-three" element={<ImageScreen />} />
          <Route exact path="/screen-fourth" element={<ScreenFourth />} />
          <Route exact path="/location" element={<LocationScreen />} />
          <Route exact path="/finish" element={<FinishScreen />} />
          <Route exact path="/video-call" element={<VideoCallStart />} />
          <Route exact path="/audio-call" element={<AudioCall />} />
          <Route exact path="/map" element={<MapComponent />} />
          <Route exact path="/safety-Tips" element={<SafetyTips />} />
          {/* <Route exact path="/safety-Tips" element={<SafetyTips />} /> */}
          <Route exact path="/privacy-policy" element={<Safetypolicy />} />
          <Route exact path="/community" element={<Community />} />
          <Route
            exact
            path="/luvsiCard"
            element={
              <>
                <LuvsiCards />

                <SwipeButton />
              </>
            }
          />
        </Routes>
        {/* <Footer className="header" /> */}
      </Router>
    </div>
  );
}

export default App;
