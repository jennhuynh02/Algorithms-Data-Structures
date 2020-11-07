function dijkstras(graph, source) {
    console.log(graph)
    let distance = {};
    for (let node in graph) {
        distance[node] = Infinity;
    }
    distance[source] = 0;  // source node to itself will always equal 0

    let unvisited = new Set(Object.keys(graph));
    let previous = {};

    while (unvisited.size > 0) {
        let currNode = minDistanceNode(unvisited, distance); // pick node with min distance from the unvisited set
      console.log("minDistNode ", currNode)
      unvisited.delete(currNode);  // deletes selected node from unvisited set
      console.log("unvisited", unvisited)
      for (let neighbor in graph[currNode]) {  // iterates through all of its neighbors
        let distanceFromCurrToNeighbor = graph[currNode][neighbor];  // grabs distance between itself and its neighbor
        let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;  //  add its own distance to the source to that of its neighbor
        
        if (distance[neighbor] > totalNeighborDistance) {  //  if distance of current neighbor is greater than the total neighbor distance
          distance[neighbor] = totalNeighborDistance;  // reassign the distance of that neighbor to total neighbor distance
          previous[neighbor] = currNode;  // neighbor's previous will then be assigned to the current node that added up to shorter path than its original
          console.log("distance", distance);
          console.log("previous", previous);
            }
        }
    }

    return { distance, previous };  // return distance of each node's shortest distance to the source node, and it's previous neighbor that leads to the most optimal path
}

function minDistanceNode(nodes, distance) {  // takes in unvisited nodes and distancy map (which initially sets all nodes distance to Infinity)
    return Array.from(nodes).reduce((minNode, node) => (
        distance[node] < distance[minNode] ? node : minNode  // chooses the node that has the least distance between it and the source node
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