import "./Clock.scss";
import React, { useState } from "react";

function Clock() {
  const [minute, setMinute] = useState("00");
  const [hour, setHour] = useState("00");
  const [second, setSecond] = useState("00");
  const [interval, setInterval] = useState(0);

  return (
    <div className="Clock">
      <div className="Clock-container">
        <div className="Clock-container-items">
          <p id="hour">{hour}</p>
        </div>
        <div className="Clock-container-items">
          <p id="minute">{minute}</p>
        </div>
        <div className="Clock-container-items">
          <p id="second">{second}</p>
        </div>
      </div>
    </div>
  );
}

export default Clock;
