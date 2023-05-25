import React from "react";
import "./Reminder.css";
import { GoCalendar } from "react-icons/go";
function Reminder() {
  return (
    <div className="reminder">
       <a className="reminder-icon" href="/">
       <GoCalendar></GoCalendar>
          </a>
      
      <p>Lời Nhắc</p>

    </div>
  );
}

export default Reminder;
