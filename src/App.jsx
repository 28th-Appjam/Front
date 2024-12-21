import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import My_page from "./pages/my_page";

export default function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myPage" element={<My_page />} />
    </Routes>
  );
}
