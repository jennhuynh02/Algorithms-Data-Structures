function highFive(items) {
    const scores = {}
    for (let i = 0; i < items.length; i++) {
        if (items[i][0] in scores) {
            scores[items[i][0]].push(items[i][1]);
        } else {
            scores[items[i][0]] = [items[i][1]];
        }
    }
    let students = countingSort(Object.keys(scores), 1000);
    for (let i = 0; i < students.length; i++) {
        scores[students[i]] = countingSort(scores[students[i]], 100).slice(0,5).reduce((a,b) => a + b, 0) / 5;
    }

    ordered = [];
    for (let i = students.length - 1; i >= 0; i--) {
        ordered.push([students[i], Math.floor(scores[students[i]])])
    }

    return ordered;
}

function countingSort(arr, max) {
    const results = [];
    const counters = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]]++;
    }

    for (let i = counters.length - 1; i >= 0; i--) {
        while (counters[i] > 0) {
            results.push(i);
            counters[i]--;
        }
    }

    return results;
}

let items = [[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]]
console.log(highFive(items))

