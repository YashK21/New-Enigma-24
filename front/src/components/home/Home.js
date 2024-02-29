import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>signup</button>
      </Link>
    </>
  );
};

export default Home;
