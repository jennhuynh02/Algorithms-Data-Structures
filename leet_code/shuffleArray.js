function shuffleArray(nums, n) {
    const shuffled = []
    for (let i = 0; i < n; i++) {
        shuffled.push(nums[i]);
        shuffled.push(nums[n + i]);
    }
    return shuffled;
}

let nums = [2, 5, 1, 3, 4, 7];
let n = 3;
console.log(shuffleArray(nums, n))