import React from "react";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>공통 헤더</h1>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
