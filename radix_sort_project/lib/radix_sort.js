function getDigitFrom(num, place) {
    return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10
}

function getIntLength(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function getMaxLength(nums) {
    let max = 0;
    nums.forEach(el => {
        max = Math.max(max, getIntLength(el))
    })

    return max;
}


function radixSort(arr) {
    if (!Array.isArray(arr)) return null;

    let numBuckets = getMaxLength(arr);
    for (let k = 0; k < numBuckets; k++) {
        let buckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        arr = [].concat(...buckets);
    }

    return arr;
}

module.exports = {
    radixSort
};