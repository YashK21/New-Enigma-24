import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate()
  const handleLoginandSignup = () => {
    navigate("/signup")
  }
  return (
    <div>
      <form>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="UserName"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            console.log(userName);
          }}
        />
        <br />
        <input
          type="password"
          className="inputBox"
          placeholder="enter password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <br />
        <br />
        <button>Submit</button>
        <br />
        <br />
        <button onClick={handleLoginandSignup}>No Account? Register!!</button>
      </form>
    </div>
  );
};

export default Login;
