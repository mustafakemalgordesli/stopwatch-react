import "./Button.scss";
function Button(props) {
  return (
    <button
      className={
        "btn-template btn-lg button-container-items " +
        (props.className ? props.className : "")
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
