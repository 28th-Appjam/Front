import React from "react";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../public/google.svg";
import ArimasLogo from "../../public/logoWithTitle.svg";

export default function Login() {
  const navigate = useNavigate();

  const LoginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error("로그인 중 에러 발생했어요 !!", error);
    }
  };

  return (
    <div className="flex w-full h-full justify-center">
      <img src={ArimasLogo} />
      <button
        onClick={LoginGoogle}
        className="flex justify-center w-full max-w-md items-center border border-[#FFBA00] py-6 rounded-2xl"
      >
        <img src={GoogleLogo} />
        구글로 로그인
      </button>
    </div>
  );
}
