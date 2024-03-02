import React, { useEffect, useState } from "react";
const Lvls = () => {
  const [ans, setAns] = useState();
  const [img, setImg] = useState();
  // const handleAns = (e) => {
  //     setAns(e.target.value)
  // }
  const handleSubmit = () => {
    alert("submit");
  };
  const fetchImg = async () => {
    const res = await fetch("http://localhost:5000/lvls", {
      headers: {
        "content-Type": "application/json",
      },
    });
    // console.log(res.data)
    let data = await res.json();
    data = data.data[0].img;
    setImg(data);
  };
  useEffect(() => {
    fetchImg();
  });
  return (
    <div>
      <br />
      Lvls
      <br />
      <br />
      {<img src={img} width={700} height={500} />}
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
