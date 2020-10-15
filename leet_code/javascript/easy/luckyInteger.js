const luckyInteger = (arr) => {
  const counter = {}

   for (let i = 0; i < arr.length; i++) {
     if (!Object.keys(counter).includes(arr[i].toString())) {
       counter[arr[i]] = 0;
     }
       counter[arr[i]] += 1;
   }

   let matches = [];
   for (let i = 0; i < Object.keys(counter).length; i++) {
     let keyValue = parseInt(Object.keys(counter)[i]);
     if (keyValue === counter[Object.keys(counter)[i]]) {
       matches.push(keyValue)
     }
   }

   if (matches.length > 0) {
     return Math.max(...matches);
   } else {
     return -1;
   }

}

let arr = [2,2,3,4];
let arr = [1,2,2,3,3,3];
arr = [1,2,2,3,3,3]