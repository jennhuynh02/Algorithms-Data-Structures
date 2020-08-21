// Problem 415
// Solution 1:
const addStrings1 = (num1, num2) => {
  let newStr = "";
  
  if (num1.length > num2.length) {
    let difference = num1.length - num2.length;
    for (let i = 0; i < difference; i++) {
      num2 = "0" + num2;
    }
  } else if (num1.length < num2.length) {
    let difference = num2.length - num1.length;
    for (let i = 0; i < difference; i++) {
      num1 = "0" + num1;
    }
  }

  let addUp = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    
    let sum = (parseInt(num1[i]) + parseInt(num2[i]) + addUp).toString();
    console.log(sum)
    if (i === 0) {
      newStr = sum + newStr 
    } else {
      let end = sum.slice(sum.length-1);
      sum.length > 1 ? addUp = parseInt(sum.slice(0, sum.length - 1)) : addUp = 0;
      newStr = end + newStr 
    }
  }

  return newStr;
}

// Solution 2:
const addStrings2 = (num1, num2) => {
  let result = "", add = 0, sum;
  let i = num1.length - 1, j = num2.length - 1;
  while (i >= 0 || j >= 0) {
    sum = (num1[i--] | 0) + (num2[j--] | 0) + add;
    result = sum % 10 + result;
    add = sum > 9 ? 1 : 0;
  }

  return (add ? 1 : "") + result;
}

// Time Complexity: O(m) - m refers to the size of string with greater length
// Space Complexity: O(m) - result should be the size of m (with the possible of 1 extra space)

let num1 = "9";
let num2 = "99";

console.log(addStrings2(num1, num2));