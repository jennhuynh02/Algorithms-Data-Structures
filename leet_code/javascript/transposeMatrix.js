function transpose (A) {
  const transposed = [];

  for (let i = 0; i < A[0].length; i++) {
    let newRow = [];
    for (let j = 0; j < A.length; j++) {
      newRow.push(A[j][i]);
    }
    transposed.push(newRow);
  }

  return transposed;
}

// let A = [[1,2,3],[4,5,6],[7,8,9]];
let A = [[1,2,3],[4,5,6]];
console.log(transpose(A));