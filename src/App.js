import Home from "./components/Home";
import Login from "./components/Login";
import Join from "./components/JoinNow";
import Navbar from "./components/Navbar";
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
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
