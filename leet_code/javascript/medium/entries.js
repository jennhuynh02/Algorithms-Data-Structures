const entries = s => {
  for (let [key, values] of [...s].entries()) {
    console.log(`${key}: ${values}`);
  }
};

let s = "hello";
console.log(entries(s));