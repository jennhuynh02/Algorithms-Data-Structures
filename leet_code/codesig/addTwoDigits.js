const addTwoDigits = n => {
  let nums = n.toString().split("").map(el => parseInt(el)).reduce((a,b) => a + b);
  return nums;
}

let n = 29;
console.log(addTwoDigits(n));