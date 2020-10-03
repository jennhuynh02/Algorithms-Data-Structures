const twoSum = A => {
  let sum = 0;

  for (const num of A) {
    let str = num.toString();
    if (str[0] !== '-' && str.length === 2) sum += num;
    if (str[0] === '-' && str.length === 3) sum += num;
  }

  return sum;
}

let A = [1,1000,80,-91]
console.log(twoSum(A))