document.addEventListener("DOMContentLoaded", function (event) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  const Months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  const MonthNow = document.querySelector("#upperdate");
  const DayNow = document.querySelector("#header_date");
  DayNow.innerText =
    currentDay + " " + Months[currentMonth] + " " + currentYear;
  MonthNow.innerText = Months[currentMonth] + " " + currentYear;
});
