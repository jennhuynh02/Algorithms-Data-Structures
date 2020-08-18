const reverseWords = s => {
  return s.split(" ").map(word => reverse(word)).join(" ");
}

// Helper function to reverse words
const reverse = word => {
  let max = word.length - 1;
  let mid = Math.ceil(max/2);
  let reverseThis = word.split("");

  for (let i = 0; i < mid; i++) {
    [reverseThis[i], reverseThis[max - i]] = [reverseThis[max - i], reverseThis[i]]
  }
  return reverseThis.join("");
}

let s = "Let's take LeetCode contest";
console.log(reverseWords(s));