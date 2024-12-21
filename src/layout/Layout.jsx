import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../../public/home.svg";
import Alram from "../../public/alram.svg";
import Profile from "../../public/profile.svg";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col relative w-[473px] h-full items-center bg-gray-500">
      <header className="absolute w-full bg-yellow-100">
        <h1>공통 헤더</h1>
      </header>
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <footer className="absolute bottom-0 flex items-center justify-center w-full bg-white">
        <div className="flex justify-between w-full px-20 pt-4 pb-10">
          <div className="flex flex-col items-center flex-1 ">
            <img src={Home} alt="home" />
            <span>홈</span>
          </div>
          <div className="flex flex-col items-center flex-1 ">
            <img src={Alram} alt="alram" />
            <span>알람</span>
          </div>
          <div className="flex flex-col items-center flex-1 ">
            <img src={Profile} alt="profile" />
            <span>마이 페이지</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
