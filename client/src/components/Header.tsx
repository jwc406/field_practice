import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loginId") === null) {
      console.log("로그인 필요");
    } else {
      setIsLogin(true);
    }
  }, []);

  function logout() {
    sessionStorage.setItem("loginId", "");
    alert("로그아웃 하였습니다");
    return setIsLogin(false);
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="header_logo">
          <h3>WMW</h3>
          <p> : What's My Weather</p>
        </div>
      </Link>
      <div className="header_menus">
        <Link to="/weather">Weather</Link>
        {isLogin ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/signIn">sign in</Link>
        )}
        <Link to="/signUp">sign up</Link>
        <AccountMenu />
      </div>
    </div>
  );
}
