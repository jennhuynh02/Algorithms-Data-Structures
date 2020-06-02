
const reverseString = (s) => {
  let half = Math.ceil((s.length) / 2);
  let indexes = s.length - 1;
  for (let i = 0; i < half; i++) {
   [ s[i], s[indexes - i] ] = [ s[indexes - i], s[i] ]
  }
};


s1 = ["h","e","l","l","o"]

s2 = ["H","a","n","n","a","h"]
