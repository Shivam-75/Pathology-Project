import { useEffect, useState } from "react";

const Curtime = () => {
  const [time, setime] = useState(new Date());

  useEffect(() => {
    const intravalivalid = setInterval(() => {
      setime(new Date());
    }, 1000);

    return () => {
      clearInterval(intravalivalid);
    };
  }, []);
  return <p style={{ color: "blue" }}>{time.toLocaleTimeString()}</p>;
};
export default Curtime;
