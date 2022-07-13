import { useNavigate } from "react-router-dom";
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
        이름:
        <input type="text" name="name" ref={nameRef} />
        <br></br>
        나이:
        <input type="number" name="age" ref={ageRef} />
        <br></br>
        직업:
        <input type="text" name="job" ref={jobRef} />
        <br></br>
        주소:
        <input type="text" name="address" ref={addressRef} />
        <br></br>
        <button
          style={{
            opacity: isLoading ? 0.3 : 1,
          }}
        >
          {isLoading ? "저장 중입니다 ... 😀" : "저장"}
        </button>
      </form>
    </div>
  );
}
