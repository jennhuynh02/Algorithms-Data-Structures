function dijkstras(graph, source) {
    let distance = {};
    for (let node in graph) {
        distance[node] = Infinity;
    }
    distance[source] = 0;

    let unvisited = new Set(Object.keys(graph));
    let previous = {};

    while (unvisited.size > 0) {
      let currNode = minDistanceNode(unvisited, distance);
      console.log(currNode)
      unvisited.delete(currNode);
      
      for (let neighbor in graph[currNode]) {
        let distanceFromCurrToNeighbor = graph[currNode][neighbor];
        let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;
        
        if (distance[neighbor] > totalNeighborDistance) {
          distance[neighbor] = totalNeighborDistance;
          previous[neighbor] = currNode;
          console.log(distance);
          console.log(previous);
            }
        }
    }

    return { distance, previous };
}

function minDistanceNode(nodes, distance) {
    return Array.from(nodes).reduce((minNode, node) => (
        distance[node] < distance[minNode] ? node : minNode
    ));
 }

//  input
let graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};

let { distance, previous } = dijkstras(graph, 'a');

// output
console.log(distance);
console.log(previous);

/*
Time Complexity:  O(n^2)
Space Complexity:  O(n^2)
*/