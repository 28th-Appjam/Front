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
    <div className="flex flex-col w-[473px] h-full items-center bg-white px-6 py-20">
      <div className="flex flex-col w-full justify-between items-center h-3/5">
        <img src={ArimasLogo} className="w-1/2 h-16" />
        <button
          onClick={LoginGoogle}
          className="flex justify-center gap-2 w-full h-20 items-center border border-[#FFBA00] py-6 rounded-2xl"
        >
          <img src={GoogleLogo} />
          <p className="font-medium text-xl">구글로 로그인</p>
        </button>
      </div>
    </div>
  );
}
