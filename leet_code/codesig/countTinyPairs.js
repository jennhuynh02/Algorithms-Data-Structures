countTinyPairs = (a,b,k) => {

  let count = 0;

  let size = a.length;

  for (let i = 0; i < size; i++) {
    let leftA = a[i].toString();
    let rightB = b[size - 1 - i].toString();
    console.log(leftA, rightB)
    if ( parseInt(leftA + rightB) < k) count += 1;
  }

  return count;

}

let a = [1, 2, 3];
let b = [1, 2, 3];
let k = 31;
console.log(countTinyPairs(a,b,k));