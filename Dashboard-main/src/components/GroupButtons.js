import React from "react";
import "./GroupButtons.css"
import logo from '../../src/assets/images/nav-picture.jpg'
function GroupButtons() {
  return (
    <>
    
      <div className="nav-picture">
        <img src={logo}/>
      </div>

      <div className="group-buttons">
        <p> Hình như bạn chưa có nhóm. Bạn hãy tạo nhóm hoặc tham gia nhóm
                để cùng học tập nào ! </p>
      <button className="create-group">Tạo Nhóm</button>
      <button className="join-group">Tham gia Nhóm</button>
    </div>
    
    </>

  );
}

export default GroupButtons;
