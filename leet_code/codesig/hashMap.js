const hashMap = (queryType, query) => {

  let map = {};
  let toShow = 0;

  for (let i = 0; i < queryType.length; i++) {

    if (queryType[i] === "insert") {
      let value = query[i][1];
      map[query[i][0]] = value;
    } else if (queryType[i] === "get"){
      toShow += map[query[i][0]];
    } else if (queryType[i] === "addToKey") {
      let allKeys = Object.keys(map);
      let newMap = {};
      for (let j = 0; j < allKeys.length; j++) {
        let savedValue = map[allKeys[j]];
        let newKey = parseInt(allKeys[j]) + query[i][0];
        newMap[newKey] = savedValue;
      }
      map = newMap;
    } else if (queryType[i] === "addToValue") {
      let allKeys = Object.keys(map);
      for (let k = 0; k < allKeys.length; k++) {
        map[allKeys[k]] = parseInt(map[allKeys[k]]) + query[i][0];
      }      
    }
    
  };

  return toShow;

}






let queryType = ["insert",
  "addToValue",
  "get",
  "insert",
  "addToKey",
  "addToValue",
  "get"]
let query = [[1, 2],
[2],
[1],
[2, 3],
[1],
[-1],
[3]]

console.log(hashMap(queryType, query));