import axios from "axios";
import React, { useEffect } from "react";

import Button from "@mui/material/Button";

export default function SignIn() {
  const [uid, setUid] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const handleUid = (e: any) => {
    setUid(e.target.value);
  };

  const handlePwd = (e: any) => {
    setPwd(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post("http://localhost:3001/jw-users/login", {
        uid: uid,
        pwd: pwd,
      })
      .then((res) => {
        if (res.data === "idError")
          return alert("아이디가 존재하지 않습니다 😥");
        else {
          if (res.data === "pwError") return alert("비밀번호가 틀렸습니다 😥");
          else {
            sessionStorage.setItem("loginId", uid);
            alert("로그인 되었습니다!");
            window.location.replace("/");
          }
        }
      })
      .catch();
  };

  useEffect(() => {
    axios.get("/jw-users").catch();
  }, []);

  return (
    <div className="formContainer">
      <div className="inputForm">
        <h2>로그인</h2>
        <input
          type="text"
          name="uid"
          placeholder="아이디를 입력하세요"
          value={uid}
          onChange={handleUid}
        />
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          value={pwd}
          onChange={handlePwd}
        />
      </div>
      <Button className="btn" onClick={onClickLogin} variant="contained">
        로그인
      </Button>
    </div>
  );
}
