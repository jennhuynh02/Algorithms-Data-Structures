// Problem 207 Course Schedule

// Approach 1

// DFS + Dynamic Programming

const course = (numCourses, prerequisites) => {
  const graph = new Map();  // to represent adjacency list
  const visited = new Array(numCourses).fill(0);  // index will represent course numbers, value 0 will mean that the node is unvisited
  for (let [course, dependency] of prerequisites)  // iterate through each prereq to map it out on the graph
    graph.set(course, ( graph.get(course) || new Set() ).add(dependency));  // if the course key exists on the graph, add dependency to its value, else create a new set and add to it
  
  // helper function
  const isCyclic = (visited, index) => {
    if (visited[index] == 2) return true;
    visited[index] = 2;  // value 2 indicates node is currently being visited
    const neighbours = graph.get(index) || [];  // grab node's neighbords if there are any
    for (let n of neighbours) {  // iterate through each neighboring node
      if (visited[n] != 1) {  // if it has not been visited, or fully visited, we will check to see if it has any cycles 
        if (isCyclic(visited, n)) return true;  // if any of the recursive checks return true, we will return true for the presence of a cycle
      }
    }
    visited[index] = 1;  // value of 1 indicates that this node has been visited and does contain cycles
    return false;  // return false because node has been visited and does not contain any cycles
  }

  for (let i = 0; i < numCourses; i++) {  // iterate through all courses
    if (visited[i] === 0) { // if this node is unvisited, we will check if it's cyclic
      if (isCyclic(visited, i)) return false; // if cyclic, return false
    }
  }

  return true;  // if we iterate through all courses without finding any cycles, we will return true (no conflicts)
};

let numCourses = 4, prerequisites = [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]]
console.log(course(numCourses, prerequisites));

/*
Time Complexity:  O(M + N) - N stand for number of courses and M stands for number of dependencies(pre-requisites) for building the graph
Space Complexity: O(N + M) - M for the graph, and N to check each node, in worst case, every node would need to be check and the recursive call stack would pile to N
*/