import React from "react";
import Navigation from "./Navigation";
import GroupButtons from "./GroupButtons";
import Reminder from "./Reminder";
import "./Main.css";

function Main() {
  return (
    <main className="main-container">
      <div className="left-navigaiton">
        <Navigation />
      </div>
      <div className="center-groupbuttons"></div>
        <GroupButtons />
      <div className="right-reminder">
        <Reminder />
      </div>
    </main>
  );
}

export default Main;
