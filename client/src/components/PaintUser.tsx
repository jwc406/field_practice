import { Link } from "react-router-dom";
import GetData from "./GetData";

export default function PaintUser() {
  return (
    <div className="users">
      <h2>😎 유저들 😎</h2>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>직업</th>
            <th>주소</th>
            <th>편집</th>
          </tr>
        </thead>
        <GetData />
      </table>
      <Link to="/jw-users/post">
        <button className="btns">추가</button>
      </Link>
    </div>
  );
}
