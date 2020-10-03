const ordered = (n, s) => {

  if (!Number.isInteger(n) || n <= 0) return "Error"
  
  let commas = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ',') commas += 1;
  };

  if (n - 1 !== commas) return "Overloaded";

  const ordered = {};

  const pairs = s.split(",");

  for (let j = pairs.length - 1; j >= 0; j--) {
    let keyVal = pairs[j].split(":");
    newKey = keyVal[1];
    newVal = keyVal[0];

    if (ordered[newKey]) {
      if (Array.isArray(ordered[newKey])) {
        ordered[newKey].push(newVal)
        ordered[newKey] = ordered[newKey].sort()
      } else {
        let single = ordered[newKey];
        ordered[newKey] = [single, newVal].sort();
      }
    } else {
      ordered[newKey] = newVal;
    }
  }
  
  return ordered;
}

console.log(ordered(3, "a:a,b:2,c:2"));