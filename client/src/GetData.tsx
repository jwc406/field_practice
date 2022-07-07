import axios from "axios";
import useSWR from "swr";

function container() {
  async function getUrl(id: number) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useSWR(`http://localhost:3001/jw-users/${id}`, () =>
      fetcher(`http://localhost:3001/jw-users/${id}`)
    );
    const res = data?.data;
    return res;
  }

  const fetcher = (url: string) => axios.get(url);

  const promise = getUrl(1);

  async function getData() {
    const a = await promise;
    // console.log(a);
    return a;
  }

  console.log(getData());

  return (
    <>
      <h2>😙</h2>
      <p>결과는 콘솔창에 ...</p>
    </>
  );
}

export default container;

// function getData() {
//   promise.then((gData) => {
//     console.log(gData);
//     return gData;
//   });
// }

//   getData(2);
//   async function getData(id: number) {
//     try {
//       const data = await fetch(`http://localhost:3001/jw-users/${id}`, {
//         headers: {
//           Accept: "application / json",
//         },
//       })
//         .then((res) => res.json())
//         .then((res) => {
//           console.log(res);
//         });
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <>
//       <h2>😙</h2>
//       <p>결과는 콘솔창에 ...</p>
//     </>
//   );
// }
