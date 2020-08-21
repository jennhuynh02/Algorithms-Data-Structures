const shuffle = (arr, pieces) => {
  for ( let i = 0; i < pieces.length; i++) {
    let part = pieces[i];
    for (let j = 0; j < arr.length; j++) {
      let chunk = arr.slice(j, j + part.length);
      if (part.join() === chunk.join()) {
        arr.splice(j, part.length);
        continue;
      };
    }
  }

  return arr.length === 0;

}

let arr = [1, 2, 5, 3];
let pieces = [[5],
[1, 2],
[3]]
console.log(shuffle(arr, pieces));