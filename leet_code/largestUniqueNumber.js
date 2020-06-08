const largestUniqueNumber = (A) => {
  let nums = {}
  let answer = []

  for (let i = 0; i < A.length; i++) {
      if (Object.keys(nums).includes(A[i].toString())) {
        nums[A[i]] += 1
      } else {
        nums[A[i]] = 0;
        nums[A[i]] += 1;
      }
  }

  const numKeys = Object.keys(nums);
  for (let i = 0; i <= numKeys.length; i++) {
    if (nums[numKeys[i]] === 1) {
      answer.push(parseInt(numKeys[i]))
    }
  }
  if (answer.length < 1) {
    return -1
  }
  return Math.max(...answer);
}

A = [9,9,8,8];
A = [5,7,3,9,4,9,8,3,1];