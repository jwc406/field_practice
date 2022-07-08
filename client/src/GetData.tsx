import axios from "axios";
import useSWR from "swr";
import { user } from "./type/user";

function GetData() {
  const { data: userInfos } = useSWR(`/jw-users`, () => fetcher(`/jw-users`));
  const fetcher = (url: string) => axios.get(url);
  // console.log(abc); //axios 응답 -> json 형태

  return userInfos?.data.map((value: user, index: any) => {
    return (
      <>
        <tr>
          <th>id</th>
          <th>이름</th>
          <th>직업</th>
          <th>주소</th>
        </tr>
        <tr>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.job}</td>
          <td>{value.address}</td>
        </tr>
      </>
    );
  });
}

export default GetData;
