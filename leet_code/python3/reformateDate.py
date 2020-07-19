def reformatDate(date):
  months = { "Jan": '01', "Feb": '02', "Mar": '03', "Apr": '04', "May": '05', "Jun": '06', "Jul": '07', "Aug": '08', "Sep": '09', "Oct": '10', "Nov": '11', "Dec": '12'}
  parts = date.split(" ")
  year = parts[2]
  month = months[parts[1]]
  day = parts[0][0:-2]
  if len(day) < 2: day = "0" + day
  return year + "-" + month + "-" + day

date1 = "20th Oct 2052"
date2 = "6th Jun 1933"
date3 = "26th May 1960"
print(reformatDate(date1))
print(reformatDate(date2))
print(reformatDate(date3))