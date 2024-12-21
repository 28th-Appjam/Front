import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import MyPage from "./pages/myPage";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/myPage" element={<MyPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
