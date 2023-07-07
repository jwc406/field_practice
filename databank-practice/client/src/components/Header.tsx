import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h2>JW's Page</h2>
      <Link to="/">Home</Link>
      <Link to="jw-users">Users</Link>
    </div>
  );
}
