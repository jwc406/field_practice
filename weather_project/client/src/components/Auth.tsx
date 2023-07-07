import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import PaintUser from "./PaintUser";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserPatch from "./UserPatch";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  //useEffect : 렌더링 이후에 어떻게 해야할지
  useEffect(() => {
    if (sessionStorage.getItem("loginId") === null) {
    } else {
      setIsLogin(true);
    }
  }, [isLogin]);

  return (
    <BrowserRouter>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/jw-users" element={<PaintUser />} />
        <Route path="/jw-users/:id" element={<UserPatch />} />
      </Routes>
    </BrowserRouter>
  );
}
