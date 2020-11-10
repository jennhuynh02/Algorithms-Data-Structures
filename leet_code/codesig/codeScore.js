const codeScore = scores => {
  const list = { "Elite": 0, "Excellent": 0, "Good": 0, "Fair": 0, "Poor": 0  };
  for (const score of scores) {
    if (score <= 599) {
      list["Poor"]++
    } else if (score <= 699) {
      list["Fair"]++;
    } else if (score <= 749) {
      list["Good"]++;
    } else if (score <= 799) {
      list["Excellent"]++;
    } else {
      list["Elite"]++;
    }
  };

  for (const key in list) {
    if (list[key] === 0)  {
      delete list[key];
    } else {
      const percent = list[key]/scores.length;
      list[key] = percent;
    }
  }

  return Object.keys(list).sort( (a,b) => {
    return list[b] - list[a];
  }).map(category =>
    `${category}: ${(list[category] * 100).toFixed(2)}%`
    )
};

let scores = [330, 723, 730, 825];
console.log(codeScore(scores));