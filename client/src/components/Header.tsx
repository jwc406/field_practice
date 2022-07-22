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
          <h3>WmW</h3>
        </Link>
      </div>
      <div className="header_menus">
        <Link to="/weather">날씨</Link>
        {isLogin ? (
          <Link onClick={logout} to={""}>
            로그아웃
          </Link>
        ) : (
          <Link to="/signIn">로그인</Link>
        )}
        <Link to="/signUp">회원가입</Link>
        <AccountMenu />
      </div>
    </div>
  );
}
