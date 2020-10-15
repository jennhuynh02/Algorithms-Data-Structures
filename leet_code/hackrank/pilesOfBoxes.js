const pileOfBoxes = (boxesInPiles) => {
  let steps = 0;
  let sorted = boxesInPiles.sort((a,b) => b - a);
  
  let max = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (max !== sorted[i]) {
      max = sorted[i];
      steps += i;
    }
  }

  return steps;
};

let boxesInPiles = [4,5,5,2,4];
console.log(pileOfBoxes(boxesInPiles));