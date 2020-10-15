function numberOfBoomerangs(points) {
   let count = 0;  // O(1)
   // starts the counter of boomerangs
   for (let i = 0; i < points.length; i++) {  // O(n)
    // iterates through points, i will represent the first point of the tuple
     const memory = {};  // O(1), space
     for (let j = 0; j < points.length; j++) {  // O(n)
      //  iterates through points, j will represent the possible second and third points of the tuple
       if (i === j) continue;  // O(1)
       //  if we are at the same index, skip to next iteration because we do not want to use the first point again
       const dist = // O(1), space
         Math.pow(points[i][0] - points[j][0], 2) +
         Math.pow(points[i][1] - points[j][1], 2);
      // distance will equal (x1 - x2)^2 + (y1 - y2)^2 - add distances of x and y to get total distance of two points
      if (memory[dist]) count += memory[dist] * 2;  // O(1)
      // if this distance exists in the memory, we will increment the count by the previous amounts of points with matching distances by 2 (because ordering of second and third point can vary two different ways) to account for all possible combinations with this extra matching point
      memory[dist] ? (memory[dist] += 1) : (memory[dist] = 1);  // O(1)
      // if this distance exists, we will increment the memory of that distance by one to account for the addition of another possible combination, else, establish the existence of this particular distance and assign it to one
     }
   }

   return count;  // O(1)
}

// Time Complexity: O(n2)
// Space Complexity: O(n)

let points = [
  [0, 0],
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

console.log(numberOfBoomerangs(points));
