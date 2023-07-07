import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import IUser from "../interfaces/IUser.interface";

import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

export default function UserPatch() {
  const url = "http://localhost:3001" + window.location.pathname;
  const user: IUser[] = useFetch(url);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !isLoading &&
      userIdRef.current &&
      emailRef.current &&
      passwordRef.current
    ) {
      setIsLoading(true);

      const userId = userIdRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", //보내는 리소스의 타입
        },
        body: JSON.stringify({
          //수정하는 정보들 입력
          userId,
          email,
          password,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("수정이 완료되었습니다!");
          navigate("/jw-users");
          setIsLoading(false);
        }
      });
    }
  }

  const userIdRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container">
      <div className="userPatch">
        <div className="users">
          <h2
            style={{
              margin: "3% 0 7% 0 ",
            }}
          >
            유저 정보
          </h2>
          <table>
            <thead>
              <tr>
                <th>아이디</th>
                <th>이메일</th>
                <th>비밀번호</th>
              </tr>
            </thead>
            <tbody>
              {user.map((value, key) => (
                <tr key={key}>
                  <td>{value.userId}</td>
                  <td>{value.email}</td>
                  <td>{value.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="formContainer patch">
          <form className="inputForm" onSubmit={onSubmit}>
            <h2>수정</h2>
            <input
              type="text"
              name="userId"
              ref={userIdRef}
              placeholder="아이디를 입력하세요"
            />
            <br></br>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="이메일을 입력하세요"
            />
            <br></br>
            <input
              type="password"
              name="password"
              ref={passwordRef}
              placeholder="비밀번호를 입력하세요"
            />
            <br></br>
            <div className="signUpBtns">
              {isLoading ? (
                <LoadingButton
                  loading
                  loadingIndicator="Loading…"
                  variant="outlined"
                >
                  Submit
                </LoadingButton>
              ) : (
                <Button type="submit" variant="contained">
                  수정
                </Button>
              )}
              <Button variant="outlined">
                <Link to="/jw-users">취소</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
