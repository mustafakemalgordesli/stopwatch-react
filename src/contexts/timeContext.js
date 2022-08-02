import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = (props) => {
  const [minute, setMinute] = useState("00");
  const [hour, setHour] = useState("00");
  const [second, setSecond] = useState("00");
  const [interval, setInterval] = useState(0);

  return (
    <Context.Provider value={(minute, hour, second, interval)}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
