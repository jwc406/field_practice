import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

interface IProps {
  user: IUser;
}

export interface IUser {
  _id?: string;
  name?: string;
  age?: number;
  job?: string;
  address?: string;
}

export default function GetData({ user: u }: IProps) {
  const [user, setUser] = useState(u);

  function del() {
    if (window.confirm("유저를 삭제하시겠습니까? 😥")) {
      fetch(`http://localhost:3001/jw-users/${u._id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setUser({
            ...user,
            _id: "",
          });
          window.alert("유저를 삭제하였습니다!");
        }
      });
    }
    if (u._id === "") {
      return window.alert("삭제할 유저가 없습니다 😮");
    }
  }

  return (
    <tbody>
      <tr>
        <td>{u.name}</td>
        <td>{u.age}</td>
        <td>{u.job}</td>
        <td>{u.address}</td>
        <td>
          <button className="btns">
            <Link to={"/jw-users/patch"}>수정</Link>
          </button>
          <button onClick={del} className="btns btns_del">
            삭제
          </button>
        </td>
      </tr>
    </tbody>
  );
}
