const minimumSum = (num, k) => {
  let sorted = num.sort((a,b) => b - a);
  let max = sorted[0];
  let times = k;
  for (let i = 0; i < num.length; i++) {
    if (times > 0) {
      if (sorted[i] >= max) {
        let divide = sorted[i];
        sorted[i] = Math.ceil(divide/2);
        max = sorted[i];
        times -= 1;
        if (times > 0) {
          if (max === sorted[i+1]) {
            sorted[i] = Math.ceil(max / 2);
            max = sorted[i];
            times -= 1;        
          }
        }
      }
    } else {
      break;
    }
  }
  let sum = 0;
  for (const n of sorted) sum += n;
  return sum;
};

let num = [10,20,7];
let k = 4;

console.log(minimumSum(num, k));