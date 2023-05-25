import React from "react";
import "./Navigation.css";
import { ImVideoCamera } from "react-icons/im";
import { GoBook } from "react-icons/go";
import { GoGraph } from "react-icons/go";
function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a className="button-click" href="/">
          <ImVideoCamera>
          
          </ImVideoCamera>
          <p> Trang chủ </p>
          </a>

        </li>
        
        <li>
          <a className="button-click" href="/">
          <GoBook></GoBook>
          <p>Bài Làm</p>
          </a>

          </li>
        <li>
        <a className="button-click" href="/">
        <GoGraph></GoGraph>
        <p>Báo Cáo</p>
          </a>

          </li>
      </ul>
    </div>
  );
}

export default Navigation;
