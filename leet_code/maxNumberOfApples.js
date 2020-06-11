function getDigitFrom(num, place) {
  return Math.floor(Math.abs(num)/Math.pow(10,place)) % 10;
}

function getIntLength(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMaxLength(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, getIntLength(nums[i]));
  }

  return max
}


function radixSort(nums) {
  if (!Array.isArray(nums)) return null;
  
  max = getMaxLength(nums);
  
  for (let k = 0; k < max; k++) {
    let buckets = Array.from({length: 10}, () => []);
    
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigitFrom(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    
    nums = [].concat(...buckets);
  }
  
  return nums;
}


function maxNumberOfApples(arr) {
  sorted = radixSort(arr)
  let basket = 5000;
  let apples = 0;

  for (let i = 0; i < sorted.length; i ++) {
    if ( (basket - sorted[i]) >= 0) {
      apples++;
      basket -= sorted[i];
    } else {
      break;
    }
  }

  return apples;
}

console.log(maxNumberOfApples([988,641,984,635,461,527,491,610,274,104,348,468,220,837,126,111,536,368,89,201,589,481,849,708,258,853,563,868,92,76,566,398,272,697,584,851,302,766,88,428,276,797,460,244,950,134,838,161,15,330]))