import { useState } from "react";
import { Link } from "react-router-dom";
import IUser from "../interfaces/IUser.interface";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

interface IProps {
  user: IUser;
}

export default function GetData(u: IProps) {
  const [users, setUsers] = useState(u.user);

  function del() {
    if (window.confirm("유저를 삭제하시겠습니까? 😥")) {
      fetch(`http://localhost:3001/jw-users/${users._id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setUsers({
            ...users,
            _id: "",
          });
          window.alert("유저를 삭제하였습니다!");
        }
      });
    }
  }

  if (users._id === "") {
    return null;
  }

  return (
    <tbody>
      <tr key={users._id}>
        <td>{users.userId}</td>
        <td>{users.email}</td>
        <td>
          <Link to={`/jw-users/${users._id}`}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={del}>
            <DeleteIcon />
          </IconButton>
        </td>
      </tr>
    </tbody>
  );
}
