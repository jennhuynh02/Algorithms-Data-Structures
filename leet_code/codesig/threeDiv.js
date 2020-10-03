const threeDiv = number => {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i+1 ; j <= number.length; j++) {
      let sub = number.slice(i, j);
      if (sub.length > 1 && sub[0] === "0") {
        continue;
      }
      if (parseInt(number.slice(i,j)) % 3 === 0) count += 1;
    }
  }

  return count;
};


let number = "303";
console.log(threeDiv(number));