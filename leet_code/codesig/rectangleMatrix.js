const matrix = (m, k) => {
  let numbers = {};

  for (let row = 0; row < m.length - k; row++) {
    let sum = 0;
    for (let col = 0; col <= m[0].length - k; col++) {
      for (let time = 0; time < k; time++) {
        console.log([(row), col + time])
        sum += m[row][col + time];
      }
      break
    }
    numbers[sum] = 0;
  }
  
  return numbers;
};

let m = 
[[1, 0, 1, 5, 6],
[3, 3, 0, 3, 3],
[2, 9, 2, 1, 2],
[0, 2, 4, 2, 0]];
let k = 2;
console.log(matrix(m,k))