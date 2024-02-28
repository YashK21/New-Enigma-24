import { useState } from "react";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
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
       <br/>
       <input
        type="password"
        className="inputBox"
        placeholder="enter password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      </form>
    </div>
  );
};

export default Login;
