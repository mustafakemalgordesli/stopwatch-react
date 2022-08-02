import "./Clock.scss";
import React, { useEffect } from "react";
import { useSite } from "../../context/SiteContext";
function Clock() {
  const { time, shows, SetTime } = useSite();

  useEffect(() => {
    let interval;
    if (shows.pause) {
      interval = setInterval(() => {
        let tempSec = time.second + 1;
        let tempMin = time.minute + Math.floor(tempSec / 60);
        let tempHour = time.hour + Math.floor(tempMin / 60);
        if (tempSec >= 60) tempSec -= 60;
        if (tempMin >= 60) tempMin -= 60;
        SetTime({
          hour: tempHour,
          minute: tempMin,
          second: tempSec,
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  });
  return (
    <div className="Clock">
      <div className="Clock-container">
        <div className="Clock-container-items">
          <p id="hour">{time.hour}</p>
        </div>
        <div className="Clock-container-items">
          <p id="minute">{time.minute}</p>
        </div>
        <div className="Clock-container-items">
          <p id="second">{time.second}</p>
        </div>
      </div>
    </div>
  );
}

export default Clock;
