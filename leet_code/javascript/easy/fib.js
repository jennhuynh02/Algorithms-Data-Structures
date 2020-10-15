const fib = (N, memo = {}) =>{
 if (N in memo) return memo[n]
  if (N === 0) return 0
  if (N === 1) return 1

  memo[N] = fib(N - 1, memo) + fib(N - 2, memo)
  return memo[N]
}

console.log(fib(3))