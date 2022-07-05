import React from "react";
import "./App.css";

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function getData() {
    try {
      const data = await fetch("/jw-users")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
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
    </div>
  );
}
