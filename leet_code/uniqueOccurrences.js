function uniqueOccurrences(arr) {
  let counter = {}
  
  for (let i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) {
      counter[arr[i]]++;
    } else {
      counter[arr[i]] = 0;
      counter[arr[i]]++;
    }
  }

  let newArrLength = Array.from(new Set(Object.values(counter))).length;
    if (newArrLength !== Object.keys(counter).length) {
        return false;
    } else {
        return true;
    }  
}

console.log(uniqueOccurrences([1,2,2,1,1,3]))