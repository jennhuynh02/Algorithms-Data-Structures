// Evaluate Reverse Polish Notation

// Approach 1:  Yikes
const reversePolish = tokens => {
  let result = [];

  let numStart = 0;
  let numEnd = 0;
  let continuedMath = false;
  for (let i = 0; i < tokens.length; i++) {
    char = tokens[i];
    if (continuedMath && "+-*/".includes(char)) continuedMath.push(char);
    if (continuedMath && (!"+-*/".includes(char) || i === tokens.length - 1)) {
      if (numStart === numEnd) numEnd = numEnd + 1;
      result = helperFunction(result.concat(tokens.slice(numStart, numEnd)), continuedMath);
      continuedMath = false;
      numStart = i;
      continue;
    }


    if ("+-*/".includes(char) && !continuedMath) {
      numEnd = i;
      if ("+-*/".includes(tokens[i + 1])) {
        continuedMath = [char];
      } else {
        result = helperFunction(result.concat(tokens.slice(numStart, i)), [char]);
        numStart = i + 1;
      }
    }

  }

  return result[0];
}

const helperFunction = (nums, operators) => {
  console.log(nums, operators)
  for (let i = 0; i < operators.length; i++) {
    let math = operators[i];
    if (math === "+") {
      nums[nums.length - 2] = parseInt(nums[nums.length - 2]) + parseInt(nums.pop());
    }
    if (math === "-") {
      nums[nums.length - 2] = parseInt(nums[nums.length - 2]) - parseInt(nums.pop());
    }
    if (math === "/") {
      nums[nums.length - 2] = Math.abs(parseInt(nums[nums.length - 2]) / parseInt(nums.pop()));
    }
    if (math === "*") {
      nums[nums.length - 2] = parseInt(nums[nums.length - 2]) * parseInt(nums.pop());
    }

  }
  return nums; 
}


let tokens1 = ["2", "1", "+", "3", "*"];
let tokens2 = ["4", "13", "5", "/", "+"];
let tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

console.log(reversePolish(tokens1))
console.log(reversePolish(tokens2))
console.log(reversePolish(tokens3))



/*
Solution 1:

Idea:
1.
2.
3.

Time Complexity:
Space Complexity:
*/