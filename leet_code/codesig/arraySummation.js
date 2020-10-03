const arraySum = (input, test) => {

  let check = new Set(test);

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i+1; j < input.length; j++) {
      let sum = input[i] + input[j];
      if (check.has(sum)) return true;
    }
  }

  return false;
};

let input = [-1,8,3];
let test = [3,7,2];
console.log(arraySum(input, test));