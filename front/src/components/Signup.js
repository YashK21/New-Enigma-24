import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../components/style/Signup.css";
// import Login from "./Login";
const Register = () => {
//   const history = useHistory();
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     username: "",
//     password: "",
//     cpassword: "",
//     level: 0,
//   });
//   let name, value;
//   const reg = (e) => {
//     name = e.target.name;
//     value = e.target.value;
//     setUser({ ...user, [name]: value });
//     // console.log(error);
//   };
//   const submit = async (e) => {
//     e.preventDefault();
//     const { name, email, username, password, cpassword, level } = user;
//     const res = await fetch("/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         username,
//         password,
//         cpassword,
//         level,
//       }),
//     });
//     const data = await res.json();
//     if (res.status === 200 || data) {
//       alert(` reg`);
//       history.push("../");
//     } else {
//       alert("inv reg");
//     }
//   };
//   const Login = () => {
//     history.push("../");
//   };
  return (
    <>
      <form method="POST">
        <label>
          <p className="label-txt">ENTER YOUR NAME</p>
          <input
            type="text"
            name="name"
            className="input"
        //     value={user.name}
        //     onChange={(e) => {
        //       reg(e);
        //     }
        // }
          />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label>
          <p className="label-txt">ENTER YOUR EMAIL</p>
          <input
            type="text"
            name="email"
            // className="input"
            // value={user.email}
            // onChange={(e) => {
            //   reg(e);
            // }}
          />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label>
          <p className="label-txt">ENTER YOUR USERNAME</p>
          <input
            type="text"
            className="input"
            name="username"
            // value={user.username}
            // onChange={(e) => {
            //   reg(e);
            // }}
          />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label>
          <p className="label-txt">ENTER YOUR PASSWORD</p>
          <input
            type="password"
            className="input"
            name="password"
            // value={user.password}
            // onChange={(e) => {
            //   reg(e);
            // }}
          />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label>
          <p className="label-txt">ENTER YOUR CONFIRM PASSWORD</p>
          <input
            type="password"
            className="input"
            name="cpassword"
            // value={user.cpassword}
            // onChange={(e) => {
            //   reg(e);
            // }}
          />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <button type="submit"
        //  onClick={submit}
         >
          Register
        </button>
        <br />
        <br />
        <button 
        // onClick={Login}
        >Have An Account ? Sign In!</button>
      </form>
      {/* <div class="back"></div> */}
    </>
  );
};

export default Register;
