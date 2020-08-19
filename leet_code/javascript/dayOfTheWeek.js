// Solution 1:
const dayOfTheWeek1 = (day, month, year) => {
  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  // O(1), space
  return weekDay[new Date(year, month - 1, day).getDay()];  // O(1)
}

/*
Uses Date constructor - creates date and gets days of the week.
Time Complexity:  O(1)
Space Complexity:  O(1)
*/


// Solution 2:
const dayOfTheWeek2 = (day, month, year) => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(year, month - 1, day).getDay()];

/*
Same idea, just in one line.
Time Complexity:  O(1)
Space Complexity:  O(1)
*/

// need to solve it without using the javascript Date class
// JS months start at 0

// Solution 3:
const dayOfTheWeek3 = (day, month, year) => {
  let adjustedMonth = month - 1;
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayOF_1970_01_01 = 4 // Thursday

  let days = day - 1;
  while (adjustedMonth - 1 >= 0) {
    days += daysInMonth(adjustedMonth - 1, year);
    adjustedMonth -= 1;
  }
  while (year - 1 >= 1970) {
    days += daysInYear(year - 1);
    year -= 1;
  }
  return weekDays[(days + dayOF_1970_01_01) % weekDays.length];
};


const daysInMonth = (month, year) => {
  let days = [
    31, // January
    28 + (isLeapYear(year) ? 1 : 0), // Feb,
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
  ];
  return days[month];
}
// if leap year, 366 days that year, else 365
const daysInYear = year => isLeapYear(year) ? 366 : 365
// Wiki: "Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400."
const isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0

// Solution 4:
const dayOfTheWeek4 = day, month, year => 

let day = 31;
let month = 8;
let year = 2019;

console.log(dayOfTheWeek1(day, month, year));
console.log(dayOfTheWeek2(day, month, year));
console.log(dayOfTheWeek3(day, month, year));
