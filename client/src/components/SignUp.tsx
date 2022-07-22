import React from "react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

export default function SignUp() {
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

      fetch(`http://localhost:3001/jw-users`, {
        method: "POST",
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
          alert("가입이 완료되었습니다!");
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
    <div className="postForm">
      <h2>회원가입</h2>
      <form id="postForm" onSubmit={onSubmit}>
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
        {isLoading ? (
          <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
            Submit
          </LoadingButton>
        ) : (
          <Button type="submit" variant="contained">
            가입
          </Button>
        )}

        <Button variant="outlined">
          <Link to="/jw-users">취소</Link>
        </Button>
      </form>
    </div>
  );
}
