import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <br />
      <Link to="/login">
        <button>Login</button>
      </Link>
      <br />
      <br />
      <Link to="/signup">
        <button>signup</button>
      </Link>
    </>
  );
};

export default Home;
