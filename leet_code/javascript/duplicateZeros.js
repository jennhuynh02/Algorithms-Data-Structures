function duplicateZeros(arr) {
  let zeros = 0;
  let regs = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((2*zeros + regs) < arr.length) {
      if (arr[i] === 0) {
        zeros += 1;
      } else {
        regs += 1;
      }
    }
  }

  let next = arr.length - 1;
  for (let j = arr.length - zeros - 1; j >= 0; j--) {
    if (arr[j] !== 0) {
      arr[next] = arr[j];
      next -= 1;
    } else {
      arr[next] = arr[j];
      arr[next - 1] = arr[j];
      next -= 2;
    }
  }

  return arr;

}

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
let arr1 = [1, 2, 3];

console.log(duplicateZeros(arr));