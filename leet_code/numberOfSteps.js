const numberOfSteps = (num) => {
  if (num === 0) return 0;
  let counter = 0;
  if (num % 2 === 0) {
    counter += numberOfSteps(num/2) + 1
  } else {
    counter += numberOfSteps(num - 1) + 1
  }
  return counter
}

console.log(numberOfSteps(14))
console.log(numberOfSteps(6))