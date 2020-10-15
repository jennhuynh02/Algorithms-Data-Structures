const triangle = arr => {
  let possibles = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let a = arr[i];
    let b = arr[i+1];
    let c = arr[i+2];
    if (a+b>c && a+c>b && b+c>a) {
      possibles.push(1);
    } else {
      possibles.push(0);
    }
  }

  return possibles;
}

let arr = [1, 2, 2, 4];
console.log(triangle(arr));