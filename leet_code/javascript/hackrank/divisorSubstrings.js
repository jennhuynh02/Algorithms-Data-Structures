const divisorSubstrings = (n,k) => {

  let string = n.toString();
  let factorSubCount = 0;
  let unique = new Set();

  for (let i = 0; i < string.length; i++) {
    let subString = string.slice(i, i+k)
    let subNum = parseInt(subString);
    if (subString.length === k && n % subNum === 0) {
      if (!unique.has(subString)) {
        unique.add(subString)
        factorSubCount += 1;
      }
    }
  }

  return factorSubCount;

};

let n = 555;
let k = 1;
console.log(divisorSubstrings(n,k))