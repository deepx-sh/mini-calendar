let currenDate = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthArr = [
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

let date = document.querySelector(".date");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
function updateCalendar() {
  if (date && day && month && year) {
    date.innerHTML = `${currenDate.getDate()}`;
    day.innerHTML = `${days[currenDate.getDay()]}`;
    month.innerHTML = `${monthArr[currenDate.getMonth()]}`;
    year.innerHTML = `${currenDate.getFullYear()}`;
  } else {
    console.log("One Element Not found");
  }
}

prevBtn.addEventListener("click", () => {
  currenDate.setDate(currenDate.getDate() - 1);
  updateCalendar();
});

nextBtn.addEventListener("click", () => {
  currenDate.setDate(currenDate.getDate() + 1);
  updateCalendar();
});

updateCalendar();
