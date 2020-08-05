function reverseInt(x) {
  let str = x.toString();  // O(n)
  let reversed = [];  // O(1)
  for (let i = str.length - 1; i >= 0; i--) {  // O(n)
    reversed.push(str[i]);  // O(1)
  }

  let num = parseInt(reversed.join('')); // O(n)
  if (num > 2147483647) {  // O(1)
    return 0;  // O(1)
  } else {   // O(1)
    if (x > 0) {   // O(1)
      return num;   // O(1)
    } else {   // O(1)
      return -num;   // O(1)
    }
  }
}

// Time Complexity: O(n)
// Space Complexity: O(n)

let int = -123;
console.log(reverseInt(int))