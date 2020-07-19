function reformatDate(date) {
  const months = { "Jan": '01', "Feb": '02', "Mar": '03', "Apr": '04', "May": '05', "Jun": '06', "Jul": '07', "Aug": '08', "Sep": '09', "Oct": '10', "Nov": '11', "Dec": '12'}
  
  const parts = date.split(" ")

  let day = parts[0].slice(0, parts[0].length - 2)
  if (day.length < 2) day = "0" + day;

  const month = months[parts[1]]

  const year = parts[2];

  return year + "-" + month + "-" + day;
  
}

let date1 = "20th Oct 2052"
let date2 = "6th Jun 1933"
let date3 = "26th May 1960"
console.log(reformatDate(date1))
console.log(reformatDate(date2))
console.log(reformatDate(date3))