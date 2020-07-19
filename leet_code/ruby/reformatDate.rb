def reformatDate(date)
  months = { "Jan": '01', "Feb": '02', "Mar": '03', "Apr": '04', "May": '05', "Jun": '06', "Jul": '07', "Aug": '08', "Sep": '09', "Oct": '10', "Nov": '11', "Dec": '12'}
  parts = date.split(" ")
  year = parts[2]
  month = months[parts[1].to_sym]
  day = parts[0][0...-2]
  if day.length < 2
    day = "0" + day
  end

  return year + '-' + month + '-' + day
end

date1 = "20th Oct 2052"
date2 = "6th Jun 1933"
date3 = "26th May 1960"
puts reformatDate(date1)
puts reformatDate(date2)
puts reformatDate(date3)