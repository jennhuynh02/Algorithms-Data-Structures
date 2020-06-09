function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let secondLast = 0;
  let last = 1;

  for (let i = 2; i <= n; i++) {
    let temp = last;
    last = last + secondLast;
    secondLast = temp;
  }

  return last;
}