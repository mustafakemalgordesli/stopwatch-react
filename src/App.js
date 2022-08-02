import "./App.scss";
import Clock from "./components/clock/Clock.js";
import Button from "./components/button/Button";
import React, { useEffect, useState } from "react";

function App() {
  const [time, SetTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
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

  const [shows, SetShows] = useState({
    start: true,
    pause: false,
    continue: false,
  });

  function handleStart() {
    setIsActive(true);
    SetShows({
      start: false,
      pause: true,
      continue: false,
    });
  }

  function handlePause() {
    setIsActive(false);
    SetShows({
      start: false,
      pause: false,
      continue: true,
    });
  }

  function handleContinue() {
    setIsActive(true);
    SetShows({
      start: false,
      pause: true,
      continue: false,
    });
  }

  function handleClear() {
    setIsActive(false);
    SetTime({
      hour: 0,
      minute: 0,
      second: 0,
    });
    SetShows({
      start: true,
      pause: false,
      continue: false,
    });
  }

  return (
    <div className="App">
      <div className="container m-5">
        <div className="row">
          <div className="col-12 text-center fs-2 text-white">
            Online - Stopwatch
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Clock time={time} />
          </div>
        </div>
        <div className="row mt-2">
          <div className="button-container">
            {shows.start ? (
              <Button onClick={handleStart} className="btn-green">
                Start
              </Button>
            ) : null}
            {shows.pause ? (
              <Button onClick={handlePause} className="btn-green">
                Pause
              </Button>
            ) : null}
            {shows.continue ? (
              <Button onClick={handleContinue} className="btn-blue">
                Continue
              </Button>
            ) : null}
            <Button onClick={handleClear} className="btn-red">
              Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
