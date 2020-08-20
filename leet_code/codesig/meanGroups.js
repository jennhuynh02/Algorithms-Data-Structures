meanGroups = a => {

  let means = {};

  for (let i = 0; i < a.length; i++) {
    let add = 0;
    for (let j = 0; j < a[i].length; j++) {
      add += a[i][j];
    }

    let mean = add / a[i].length;
    console.log(i, "index")
    console.log(mean, "mean")

    if (means[mean]) {
      means[mean] = means[mean].concat([i]);
    } else {
      means[mean] = [i];
    }
  }

  let toSort = Object.values(means);

  return toSort.sort((first,second) => first[0] - second[0]);

}

let a = [[-2, 4, 7, -6, 2, -5, 3],
[-1, 0, 0, 0],
[2, 2, -6, 17, 9, -22, 30, -16, 0, -1, -11, 6, 0, -4],
[3, 3, -8, -2, 3]]

console.log(meanGroups(a));