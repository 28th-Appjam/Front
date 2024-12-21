import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import MyPage from "./pages/myPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myPage" element={<MyPage />} />
    </Routes>
  );
}
