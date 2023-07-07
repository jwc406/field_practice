import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GetData from "./GetData";
import IUser from "../interfaces/IUser.interface";

export default function PaintUser() {
  const user: IUser[] = useFetch("http://localhost:3001/jw-users");

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
        {user.map((users: IUser) => (
          <GetData user={users} key={users._id} />
        ))}
      </table>
      <Link to="/jw-users/post">
        <button
          className="btns"
          style={{ marginTop: "30px", width: "80px", height: "40px" }}
        >
          추가
        </button>
      </Link>
    </div>
  );
}
