import Home from "./components/Home";
import Login from "./components/Login";
import Join from "./components/JoinNow";
import Navbar from "./components/Navbar";
import ForgetPasswordForm from "./components/ForgetPasswordForm";
import OTPform from "./components/OTPform";
import Profile from "./components/Profile/ProfilePage";
import { BrowserRouter , Route , Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/join" element={<Join/>}/>
        <Route path="/ForgetPassword" element={<ForgetPasswordForm/>}/>
        <Route path="/OTP" element={<OTPform/>}/>
        <Route  path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
