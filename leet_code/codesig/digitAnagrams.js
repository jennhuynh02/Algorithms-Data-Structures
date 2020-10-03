const digitAnagrams = a => {
  let count = 0;

  a.forEach((num, i) => {
    let digits = new Map();
    num.toString().split("").forEach(el => digits[el] ? digits[el] = digits[el] + 1 : digits[el] = 1)
    a[i] = digits;
  })

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (compare(a[i], a[j])) count += 1;
    }
  }

  return count;
};

const compare = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    if (obj1[keys1[i]] !== obj2[keys1[i]]) return false;
  }

  return true;
};


let a = [25, 35, 872, 228, 53, 278, 872];
console.log(digitAnagrams(a));