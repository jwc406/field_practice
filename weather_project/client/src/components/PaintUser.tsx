import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GetData from "./GetData";
import IUser from "../interfaces/IUser.interface";

export default function PaintUser() {
  const user: IUser[] = useFetch("http://localhost:3001/jw-users");

  return (
    <div className="users">
      <h2
        style={{
          marginBottom: "3%",
        }}
      >
        😎 유저들 😎
      </h2>
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이메일</th>
            <th>편집</th>
          </tr>
        </thead>
        {user.map((users: IUser) => (
          <GetData user={users} key={users._id} />
        ))}
      </table>
    </div>
  );
}
