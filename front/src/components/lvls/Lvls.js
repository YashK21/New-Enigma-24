import React, { useState } from "react";
const Lvls = () => {
  const [ans, setAns] = useState();
  // const handleAns = (e) => {
  //     setAns(e.target.value)
  // }
  const handleSubmit = () => {
    alert("submit");
  };
  return (
    <div>
      <br />
      Lvls
      <br />
      <br />
      <img
        src={
          require("../img/bridgetbishop.png")
        //   require("bridgetbishop")
        }
        style={{ width: "900px", height: "500px" }}
        alt="img1"
      />
      <br />
      <br />
      <input
        type="text"
        value={ans}
        onChange={(e) => {
          setAns(e.target.value);
        }}
        placeholder="enter your answer"
      ></input>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Lvls;
