import React from "react";

function timeFormat(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return { clock: `${hours}:${minutes}:${seconds}`, ampm: `${ampm}` };
}

const Home = () => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const { clock, ampm } = timeFormat(time);
  return (
    <div
      className="flex v-screen h-screen bg-black text-white text-center m-auto flex-col justify-center font-light tracking-widest"
      style={{ fontSize: "200px" }}
    >
      <div className="relative">
        <h1>{clock}</h1>
        <span
          className="absolute text-gray-100"
          style={{ fontSize: "100px", right: "40px", top: "-75px" }}
        >
          {ampm}
        </span>
      </div>
    </div>
  );
};

export default Home;
