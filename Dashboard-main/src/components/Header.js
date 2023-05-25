import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
        <div className="Logo-image">
          <img src="https://img.freepik.com/premium-vector/study-group-logo-template-design_20029-469.jpg" />
        </div>   
      <div className="Page-name">
     
        <h1>Group Study</h1>
      </div>
      <div className="Login-page">
        <button className="Login-button"> Đăng nhập </button>
      </div>
      <div className="Register-page">
        <button className="Register-button"> Đăng ký </button>
      </div>
      <div className="user-profile">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="User Avatar"
        />
      </div>
    </header>
  );
}

export default Header;
