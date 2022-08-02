import { createContext } from "react";
import { useState, useContext } from "react";
const SiteContext = createContext();

const Provider = ({ children }) => {
  const [time, SetTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [shows, SetShows] = useState({
    start: true,
    pause: false,
    continue: false,
  });

  const data = {
    shows,
    SetShows,
    time,
    SetTime,
  };
  return <SiteContext.Provider value={data}>{children}</SiteContext.Provider>;
};

export const useSite = () => useContext(SiteContext);

export default Provider;
