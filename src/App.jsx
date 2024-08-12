import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getMonthIndex(date) {
    let monthIndex = date.getMonth();
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return month[monthIndex];
  }

  function getDayIndex(day) {
    let dayIndex = day.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[dayIndex];
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const currentDay = new Date();
  const day = getDayIndex(currentDay);
  const date = time.getDate();
  const currentMonth = new Date();
  const month = getMonthIndex(currentMonth);
  const year = time.getFullYear();

  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-gradient-to-bl from-blue-500 via-gray-700 to-black p-4">
      <div className="relative bg-gray-900 rounded-lg px-6 py-4 shadow-lg sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-12 lg:py-8">
        <div className="absolute inset-0 border-2 border-transparent rounded-lg animate-borderGradient bg-clip-border bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>
        <div className="relative z-10">
          <h1 className="text-3xl tracking-widest drop-shadow-lg text-blue-200 sm:text-4xl md:text-5xl">
            {hours < 10 ? "0" + hours : hours}:
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
            {hours >= 12 ? " PM " : " AM "}
          </h1>
          <div className="bg-blue-100 text-center rounded mt-2 p-1 shadow-inner sm:mt-3 sm:p-2 md:mt-4 md:p-3">
            <span className="text-lg text-gray-800 font-bold sm:text-xl md:text-2xl">
              {day} {date < 10 ? "0" + date : date}{" "}
              {month < 10 ? "0" + month : month}, {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
