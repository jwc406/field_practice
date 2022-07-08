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
          <td>{value.name}</td>
          <td>{value.age}</td>
          <td>{value.job}</td>
          <td>{value.address}</td>
        </tr>
      </>
    );
  });
}

export default GetData;
