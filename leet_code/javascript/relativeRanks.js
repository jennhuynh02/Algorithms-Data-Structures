function relativeRanks(nums) {
  let sortedScores = [...nums].sort((a, b) => (a > b ? -1 : 1));
  // creates a sorted copy of nums, from greatest to smallest - the ordering of the index in the array will be used to determine ranking placements
  let ranking = {};
  // initialize a new ranking object where keys will equal to the score, and the values will equal to the rank
  for (let i = 0; i < sortedScores.length; i++) {
    if (i < 3) {
      // we will set the first three sorted scores to their medal rankings respectively
      if (i === 0) ranking[sortedScores[i]] = "Gold Medal";
      if (i === 1) ranking[sortedScores[i]] = "Silver Medal";
      if (i === 2) ranking[sortedScores[i]] = "Bronze Medal";
    } else {
      // if not the first three top scores, we will set that score in the ranking object to its (index placement + 1) from the sortedScores array
      let index = i;
      // saving index number to a variable so that we can add one to it without affecting the loop increment
      ranking[sortedScores[i]] = (index + 1).toString();
      // set ranking score to its (index value placement + 1) - use string to specify rank in output
    }
  };

  for (let j = 0; j < nums.length; j++) {
    sortedScores[j] = ranking[nums[j].toString()];
    // use the sortedScores array as a PLACE to represent the ranks; this array was initially used to just sort the score, but using it later to return as a result optimizes memory space a bit
  }

  return sortedScores;
}

// Time Complexity: O(n log n)
// Space Complexity: O(n)

// let nums = [5, 4, 3, 2, 1];
let nums = [10, 3, 8, 9, 4];
console.log(relativeRanks(nums));