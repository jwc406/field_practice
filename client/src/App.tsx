import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [a, setA] = useState<any>();
  useEffect(() => {
    getData();
  }, []);
  // setA(getData());
  async function getData() {
    try {
      const data = await fetch("http://localhost:3000/jw-users")
        .then((res) => {
          // setA(res.json());
          // console.log("a", a);
          console.log(res);
        })
        .then((res) => {
          // setA(res);
          // console.log(res);
        });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header" />
      <h2>유저를 등록하세요 😙</h2>
      {/* <div>{a}</div> */}
    </div>
  );
}
