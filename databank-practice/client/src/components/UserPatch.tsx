import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import IUser from "../interfaces/IUser.interface";

export default function UserPatch() {
  const url = "http://localhost:3001" + window.location.pathname;
  const user: IUser[] = useFetch(url);

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

      fetch(url, {
        method: "PATCH",
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
          alert("수정이 완료되었습니다!");
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
    <div className="container">
      <div className="userPatch">
        <div className="users paintTable">
          <h2>😎 수정할 유저 😎</h2>
          <table>
            <thead>
              <tr>
                <th>이름</th>
                <th>나이</th>
                <th>직업</th>
                <th>주소</th>
              </tr>
            </thead>
            <tbody>
              {user.map((value, key) => (
                <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.job}</td>
                  <td>{value.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="postForm">
          <h2>정보를 수정하세요!</h2>
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
              {isLoading ? "수정 중입니다 ... 😀" : "수정"}
            </button>
            <button className="btns btns_del">
              <Link to="/jw-users">취소</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
