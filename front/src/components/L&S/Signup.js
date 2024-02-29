import React, { useEffect, useState } from "react";
import "../style/Signup.css"
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email,setEmail] = useState("")
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("")
  const navigate = useNavigate()
  const handleLoginandSignup = () => {
    // console.log("name")
    navigate("/login")
  }  
  const handleSubmit = () => {
    navigate("/lvls")
  }
  return (
    <div>
      <form>
        <input
          type="text"
          className="inputBox"
          placeholder="enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
          value={cpass}
          onChange={(e) => {
            setCPass(e.target.value);
          }}
        />
         <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
        <br />
        <button onClick={handleLoginandSignup}>Had an Account? Login!!</button>
      </form>
    </div>
  );
};

export default Register;
