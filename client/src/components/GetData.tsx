import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { ReactEventHandler } from "react";

export interface IUser {
  _id?: string;
  name?: string;
  age?: number;
  job?: string;
  address?: string;
}

export default function GetData() {
  const user: IUser[] = useFetch("http://localhost:3001/jw-users");

  function del(id: any) {
    if (window.confirm("유저를 삭제하시겠습니까? 😥")) {
      fetch(`http://localhost:3001/jw-users/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          window.alert("유저를 삭제하였습니다!");
        }
      });
    }
  }

  return (
    <tbody>
      {user.map((value, key) => (
        <tr key={key}>
          <td>{value.name}</td>
          <td>{value.age}</td>
          <td>{value.job}</td>
          <td>{value.address}</td>
          <td>
            <button className="btns">
              <Link to={"/jw-users/patch"}>수정</Link>
            </button>
            <button
              onClick={() => {
                del(value._id);
              }}
              className="btns btns_del"
            >
              삭제
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
