function tribonacci(n) {
  const sequence = [0,1,1]; //O(1)
  if (n <= 2) return sequence[n]; //O(1)

  for (let i = 3; i <= n ;i++) { //O(n)
    let next = 0; //O(1)
    next += sequence[i - 1]; //O(1)
    next += sequence[i - 2]; //O(1)
    next += sequence[i - 3]; //O(1)
    sequence.push(next); //O(1)
  }
  // O(n) * 4(O(1)) --> O(n)

  return sequence[sequence.length - 1]; //O(1)
}

console.log(tribonacci(4));
console.log(tribonacci(25));

// Time Complexity: O(n)
// Space Complexity: O(n) growing sequence array space

