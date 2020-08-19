const dayOfTheWeek = (day, month, year) => {
  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  // O(1), space
  return weekDay[new Date(year, month - 1, day).getDay()];  // O(1)
}

/*
Time Complexity:  O(1)
Space Complexity:  O(1)
*/

const dayOfTheWeek2 = (day, month, year) => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(year, month - 1, day).getDay()];

/*
Same idea, just in one line.
Time Complexity:  O(1)
Space Complexity:  O(1)
*/

let day = 31;
let month = 8;
let year = 2019;

console.log(dayOfTheWeek(day, month, year));
console.log(dayOfTheWeek2(day, month, year));