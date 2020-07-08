function runningSum(nums) {
    sumArr = [ nums[0] ];

    for (let i = 1; i < nums.length; i++) {
        sumArr.push( nums[i] + sumArr[i - 1] )
    }

    return sumArr;
}

nums = [1, 2, 3, 4]
console.log(runningSum(nums))