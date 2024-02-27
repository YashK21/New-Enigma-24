import { useState } from "react";
const Login = () => {
    const [userName,setUserName] = useState("")
    const [pass,setPass] = useState("")
  return (
    <div>
      <form method="POST">
        <div className="form-group">
          <label>username</label>
          <input
            type="name"
            name="username"
            className="form-control"
            placeholder="Enter username"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            id="pwd"
          />
        </div>
        {/* <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> Remember me
          </label>
        </div> */}
        <button
          // onClick={submit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
