import "./App.css";
import GetData from "./GetData";

// const fetcher = () =>
//   axios.get("http://localhost:3001/jw-users").then((res) => res.data);

// export default function App() {
//   // const [a, setA] = useState<any>();
//   // useEffect(() => {
//   // getData();
//   // }, []);
//   // setA(getData());
//   getData();
//   async function getData() {
//     try {
//       const data = await fetch("http://localhost:3000/jw-users")
//         .then((res) => {
//           setA(res.json());
//           // console.log("a", a);
//           console.log(res);
//         })
//         .then((res) => {
//           // setA(res);
//           // console.log(res);
//         });
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

function App() {
  return (
    <div className="App">
      <GetData />
    </div>
  );
}
export default App;
