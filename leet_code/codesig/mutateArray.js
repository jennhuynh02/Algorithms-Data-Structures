mutateArray = (n,a) => {

  let prev = 0;
  for (let i = 0; i < n; i++) {
    if (i === (n-1)) {
      a[i] = (prev + a[i] + 0);
    } else {
      nextPrev = a[i];
      a[i] = (prev + a[i] + a[i+1]);
      prev = nextPrev;
    }
  }
  
  return a;
}

let n = 5;
let a = [4, 0, 1, -2, 3];
console.log(mutateArray(n,a));