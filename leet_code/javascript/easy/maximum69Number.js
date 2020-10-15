function maximum(num) {
  let numArr = num.toString().split('');
  let check = [...new Set(numArr)]
  if (check.length === 1 && check[0] === '9') return num;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === "6") {
      numArr[i] = "9";
      break;
    }
  }
  return parseInt(numArr.join(''));
}

num = 9696;
console.log(maximum(num))