// Problem 50 Pow(x,n)

// Approach 1 Recursive

const myPow = (x,n) => {
  /* If the exponent is negative and the base does not equal 0:
      1.  Call the recursive function 
          - divide 1 by x, pass it in as the new base
          - turn the exponent to positive and pass it in
  */
  if (n < 0 && x !== 0) {
    return myPow(1 / x, n * -1);
  }

  // Exponent of 0 will result in 1 
  if (n === 0) return 1;
  // Exponent of 1 will result in the base number
  if (n === 1) return x;

  // If the exponent is an even number
  if (n % 2 === 0) {
    /* Call the recursion on half of the exponent because Math.pow(2,10) === Math.pow(2,5) x Math.pow(2,5)
    therefore, we will only need to perform the recursion on half of the exponent, resulting in logN computations
    */
    const res = myPow(x, n / 2);

    // Use the result to multiply it to itself, and return this value
    return res * res;
  } else {
  // If the exponent is a negative number, subtract it by 1, multiply the recursion by the base to makeup for that 1
  // Purpose of doing this is to be able to pass in an even number to perform the recursion on half of the exponent
    return myPow(x, n - 1) * x;
  }
};

let x = 2.00000, n = 10;
console.log(myPow(x,n));

/*
Solution 1:
Time Complexity: O(logN) - each time the recursive function is called, n is halved
Space Complexity: O(logN) - max height of memory stack for recursion
*/