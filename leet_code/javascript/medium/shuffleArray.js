// Problem 384 Shuffle An Array

// Approach 1

const shuffleArray = nums => {

}

const Solution = function(nums) {
  this.nums = nums;

  this.first = () => {
    return nums[0];
  }
}

let a = new Solution([0,1,2]);
let b = new Solution(11);
console.log(a,b)
console.log(a.first,b.first)