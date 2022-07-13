import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GetData, { IUser } from "./GetData";

export default function PaintUser() {
  const users: IUser[] = useFetch(`http://localhost:3001/jw-users`);

  return (
    <div className="users">
      <h2>😎 유저들 😎</h2>
      {users.length === 0 && <span>로딩 중입니다...😁</span>}
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
        {users.map((user) => (
          <GetData user={user} key={user._id} />
        ))}
      </table>
      <Link to="/jw-users/post">
        <button className="btns">추가</button>
      </Link>
    </div>
  );
}
