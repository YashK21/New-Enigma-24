import React, { useState } from "react";
import "../components/style/Signup.css";
// import Login from "./Login";
const Register = () => {
  const [email,setEmail] = useState("")
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("")
  return (
    <div>
      <form>
        <input
          type="text"
          className="inputBox"
          placeholder="enter email"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <br/>
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
        <br/>
        <input
          type="password"
          className="inputBox"
          placeholder="confirm password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Register;
