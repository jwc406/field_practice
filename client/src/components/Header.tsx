import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import { useNavigate } from "react-router-dom";

export default function Header({ isLogin, setIsLogin }: any) {
  const navigate = useNavigate();

  function logout() {
    alert("로그아웃 하였습니다");
    setIsLogin(false);
    sessionStorage.removeItem("loginId");
    navigate("/");
  }

  return (
    <div className="header">
      <div className="header_logos">
        <Link to="/">
          <h3>WMW</h3>
        </Link>
        <Link to="/weather">Weather</Link>
      </div>
      <div className="header_menus">
        {isLogin ? (
          <Link onClick={logout} to={""}>
            Logout
          </Link>
        ) : (
          <Link to="/signIn">sign in</Link>
        )}
        <Link to="/signUp">sign up</Link>
        <AccountMenu />
      </div>
    </div>
  );
}
