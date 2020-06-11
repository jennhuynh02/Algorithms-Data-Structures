function countingSort(arr, max) {
    const results = [];
    const counters = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]]++;
    }

    for (let i = 0; i < counters.length; i++) {
        while (counters[i] > 0) {
            results.push(i);
            counters[i]--;
        }
    }

    return results;
}


module.exports = {
    countingSort
};

/* Time Complexity: O(n + k)
Fastest when k is relatively small because runtime is dependent on length of the largest integer.
Faster than radix sort.

Space Complexity: O(n + k)
Amount of memory consumed increases relative to both the size of the input array and length of the longest integer

Notes:  Use this algo when you DO know the largest element in the list, if you don't, use radix sort instead.
Use this sort to achieve linear time, but there is a memory cost trade-off depending on k.

*/
