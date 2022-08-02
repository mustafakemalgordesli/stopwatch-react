import "./Clock.scss";

function Clock(props) {
  return (
    <div className="Clock">
      <div className="Clock-container">
        <div className="Clock-container-items">
          <p id="hour">{props.time.hour}</p>
        </div>
        <div className="Clock-container-items">
          <p id="minute">{props.time.minute}</p>
        </div>
        <div className="Clock-container-items">
          <p id="second">{props.time.second}</p>
        </div>
      </div>
    </div>
  );
}

export default Clock;
