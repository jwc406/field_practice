import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";

export default function UserPost() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !isLoading &&
      nameRef.current &&
      ageRef.current &&
      jobRef.current &&
      addressRef.current
    ) {
      setIsLoading(true);

      const name = nameRef.current.value;
      const age = Number(ageRef.current.value);
      const job = jobRef.current.value;
      const address = addressRef.current.value;

      fetch(`http://localhost:3001/jw-users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", //보내는 리소스의 타입
        },
        body: JSON.stringify({
          //수정하는 정보들 입력
          name,
          age,
          address,
          job,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다!");
          navigate("/jw-users");
          setIsLoading(false);
        }
      });
    }
  }

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const jobRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  return (
    <div className="postForm">
      <h2>유저를 추가하세요!</h2>
      <form id="postForm" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          ref={nameRef}
          placeholder="이름을 입력하세요"
        />
        <br></br>
        <input
          type="number"
          name="age"
          ref={ageRef}
          placeholder="나이를 입력하세요"
        />
        <br></br>
        <input
          type="text"
          name="job"
          ref={jobRef}
          placeholder="직업을 입력하세요"
        />
        <br></br>
        <input
          type="text"
          name="address"
          ref={addressRef}
          placeholder="주소를 입력하세요"
        />
        <br></br>
        <button
          style={{
            opacity: isLoading ? 0.3 : 1,
          }}
          className="btns"
        >
          {isLoading ? "저장 중입니다 ... 😀" : "저장"}
        </button>
        <button className="btns btns_del">
          <Link to="/jw-users">취소</Link>
        </button>
      </form>
    </div>
  );
}
