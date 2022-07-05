import React from "react";
import "./App.css";

export default function App() {
  getData(1);
  async function getData(id: number) {
    try {
      const data = await fetch(`/jw-users/${id}`)
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
