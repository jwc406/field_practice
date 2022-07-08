import axios from "axios";
import useSWR from "swr";
import { job } from "./type/job";

function Container() {
  const { data: abc } = useSWR(`/jw-users`, () =>
    fetcher(`http://localhost:3001/jw-users/`)
  );
  const fetcher = (url: string) => axios.get(url);
  console.log(abc); //axios 응답 -> json 형태

  // const resultData = getData();
  // console.log("data:", data?.data[0].name);
  const getName = abc?.data[0].name;
  // console.log("된다!", abc);

  return abc?.data.map((value: job, index: any) => {
    return (
      <>
        <div>{value.id}</div>
        <div>{value.name}</div>
        <div>{value.job}</div>
      </>
    );
  });
}

export default Container;
