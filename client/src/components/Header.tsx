import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header_logo">
          <h3>WMW</h3>
          <p> : What's My Weather</p>
        </div>
      </Link>
      <div className="header_menus">
        <Link to="/signIn">sign in</Link>
        <Link to="/signUp">sign up</Link>
        <div>최</div>
      </div>
    </div>
  );
}
