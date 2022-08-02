import "./Home.scss";
import Clock from "./components/clock/Clock.js";
import Button from "./components/button/Button";
import { useSite } from "./context/SiteContext";
export default function Home() {
  const { shows, SetTime, SetShows } = useSite();

  function handleStart() {
    SetShows({
      start: false,
      pause: true,
      continue: false,
    });
  }

  function handlePause() {
    SetShows({
      start: false,
      pause: false,
      continue: true,
    });
  }

  function handleContinue() {
    SetShows({
      start: false,
      pause: true,
      continue: false,
    });
  }

  function handleClear() {
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
    <div className="container m-5">
      <div className="row">
        <div className="col-12 text-center fs-2 text-white">
          Online - Stopwatch
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Clock />
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
  );
}
