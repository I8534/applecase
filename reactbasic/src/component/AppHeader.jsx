import React from "react";
import apple from "./apple.jpg";
import "./AppHeader.css";

function AppHeader() {
  return (
    <div className="wrapper">
      <nav>
        <h1 className="logo">
          <a href="">
            <img src={apple} alt="logo" />
          </a>
        </h1>

        <h2 className="visually-hidden">메뉴</h2>
        <ul className="gnb-list">
          <li className="gnb-item">
            <a href="./menu1.html">menu1</a>
          </li>
          <li className="gnb-item">
            <a href="./menu2.html">menu2</a>
          </li>
          <li className="gnb-item">
            <a href="./menu3.html">menu3</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AppHeader;
