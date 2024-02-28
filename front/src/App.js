import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/L&S/Login";
import Signup from "./components/L&S/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
