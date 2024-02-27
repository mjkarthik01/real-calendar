import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./calendar.css";

function CalendarReal() {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [currentView, setCurrentView] = useState();
  const handleDateChange = (newDate) => {
    setDateRange(newDate);
  };

  const isSameMonth = (date1, date2) => {
    return (
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const tileClassName = ({ date }) => {
    return isSameMonth(date, new Date()) ? "active-month" : "";
  };

  const formatShortWeekday = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: "short" })[0];
  };

  const formatMonthYear = (locale, date) => {
    return date
      .toLocaleDateString(locale, { month: "short", year: "numeric" })
      .toUpperCase();
  };

  const handleApplyClick = () => {
    console.log("Applying date range:", dateRange);
  };
  useEffect(() => {
    const el = document.createElement("button");

    el.classList.add("apply-btn", "text-lg");

    el.setAttribute("id", "my-id");

    el.textContent = "Apply";

    const box = document.getElementsByClassName("react-calendar")[0];
    console.log(box);
    box && box.appendChild(el);
    box.addEventListener("click", handleApplyClick);
  }, []);
  return (
    <div className="App">
      <h1>Date Range Picker</h1>
      <div className="calendar-container">
        <Calendar
          selectRange
          onChange={handleDateChange}
          value={dateRange}
          tileClassName={tileClassName}
          formatShortWeekday={formatShortWeekday}
          formatMonthYear={formatMonthYear}
          showMonthAndYearPickers
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={false}
          minDetail={"decade"}
          view={currentView}
        />
      </div>
    </div>
  );
}

export default CalendarReal;
