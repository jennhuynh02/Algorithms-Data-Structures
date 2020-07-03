function countingElements (arr) {
  const occurrences = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (arr[i] in occurrences) {
      occurrences[num] += 1
    } else {
      occurrences[num] = 0;
      occurrences[num] += 1;
    }
  }

  let counter = 0;
  const theKeys = Object.keys(occurrences);  
  for (let numKey = 0; numKey < theKeys.length; numKey++) {
    let regNum = theKeys[numKey]
    let plusNum = parseInt(regNum) + 1;
    let stringPlusNum = plusNum.toString();
    if (theKeys.includes(stringPlusNum)) {
      counter += occurrences[regNum]
    }
  }

  return counter;
}

let arr = [1,1,3,3,5,5,7,7];
console.log(countingElements(arr));
let arr1 = [1,3,2,3,5,0];
console.log(countingElements(arr1));
let arr2 = [1,1,2];
console.log(countingElements(arr2));
let arr3 = [1,1,2,2];
console.log(countingElements(arr3));