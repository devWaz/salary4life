import Home from "./components/Home";
import Login from "./components/Login";
import Join from "./components/JoinNow";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/ProfilePage";
import Deposit from "./components/Deposit/Deposit";
import Withdraw from "./components/Withdraw/Withdraw";
import AirtimeDeposit from "./components/Deposit/AirtimeDeposit";
import CardDeposit from "./components/Deposit/CardDeposit";
import USSDdeposit from "./components/Deposit/USSDdeposit";
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
        <Route  path="/profile" element={<Profile/>}/>
        <Route  path="/deposit" element={<Deposit/>}/>
        <Route  path="/withdraw" element={<Withdraw/>}/>
        <Route  path="/airtime_deposit" element={<AirtimeDeposit/>}/>
        <Route  path="/card_deposit" element={<CardDeposit/>}/>
        <Route  path="/ussd_deposit" element={<USSDdeposit/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
