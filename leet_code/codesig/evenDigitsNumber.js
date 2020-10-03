const evenNumberDigits = a => {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i].toString().length % 2 === 0) count += 1;
  }

  return count;
};

let a = [12, 134, 111, 1111, 10];
console.log(evenNumberDigits(a));