import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase.js';
import Login from './login.jsx'

export default function Main() {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
  }
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => getUser();
  }, []);
  return (
    <>
      {user ? (
        <div>{user.displayName}님 안녕하세요!</div>
      ) : (
        <button onClick={toLogin}>로그인</button>
      )}
    </>
  );
}