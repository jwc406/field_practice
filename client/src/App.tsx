import "./App.css";
import GetData from "./GetData";

function App() {
  return (
    <div className="App">
      <h1>유저들</h1>
      <tr>
        <th>이름</th>
        <th>나이</th>
        <th>직업</th>
        <th>주소</th>
      </tr>
      <GetData />
    </div>
  );
}
export default App;
