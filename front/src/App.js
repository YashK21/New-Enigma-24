import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/L&S/Login";
import Signup from "./components/L&S/Signup";
import Home from "./components/home/Home";
import Lvls from "./components/lvls/Lvls";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lvls" element={<Lvls />} />
      </Routes>
    </div>
  );
}

export default App;
