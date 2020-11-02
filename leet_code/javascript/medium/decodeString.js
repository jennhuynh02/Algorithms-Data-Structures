// Problem  394 Decode String

// Approach 1 Stack Apporach

const decodeString = s => {
  const stack = [];
  let decoded = "";
  let open = 0;
  let close = 0;

  for (const char of s) {
    if (char === "[") open += 1;
    if (char === "]") close += 1;
    stack.push(char)

    if (close && open === close) {
      let tempStack = [];
      let subString = "";
      while (stack.length) {
        let val = stack.pop();
        if (val === "]") {
          if (subString.length) {
            tempStack.push(subString);
          }
          subString = "";
        } else if (val === "[") {
          let times = "";
          let counting = true;
          while (counting) {
            let possible = parseInt(stack[stack.length - 1]);
            if (possible >= 0) {
              times = stack.pop() + times
            } else {
              counting = false;
            } 
          }
          let copy = subString.slice();
          for (let j = 0; j < parseInt(times) - 1; j++) {
            subString += copy;
          }
          if (tempStack.length) {
            subString += tempStack.pop()
          }
        } else {
          subString = val += subString;
        }
      }
      decoded += subString;
      open = 0;
      close = 0;
    }
  } 
  return decoded + stack.join("");
};

let s1 = "3[a]2[b4[F]c]";  // => "aaabFFFFcbFFFFc"
console.log(decodeString(s1));

/*
Solution 1:
Time Complexity: O(k * n) - highest number of repeats * number of chars in a repeated string
Space Complexity: O(k * n) - size of decoded string
*/