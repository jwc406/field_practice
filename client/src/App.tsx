import "./App.css";
import Header from "./components/Header";
import PaintUser from "./components/PaintUser";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import UserPatch from "./components/UserPatch";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

export default App;
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/jw-users" element={<PaintUser />} />
          <Route path="/jw-users/:id" element={<UserPatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
