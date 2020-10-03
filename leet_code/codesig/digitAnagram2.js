const digitAnagrams = a => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    let chars = a[i].toString().split("").sort().join('');
    a[i] = chars;
  }

  for (let j = 0; j < a.length; j++) {
    for (let k = j+1; k < a.length; k++) {
      if (a[j] !== a[k]) continue;
      count += 1;
    }
  }

  return count;
};




let a = [25, 35, 872, 228, 53, 278, 872];
console.log(digitAnagrams(a));