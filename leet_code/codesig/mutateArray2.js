const mutateArray = (n,a) => {
  a.push(0);
  let nextPrev = 0;
  for (let i = 0; i < n; i++) {
    let newNum = nextPrev + a[i] + a[i+1];
    nextPrev = a[i];
    a[i] = newNum;
  }
  a.pop();
  return a;
};

let n = 5;
let a = [4, 0, 1, -2, 3];
console.log(mutateArray(n,a));