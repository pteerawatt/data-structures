// Instantiate a new graph
var Graph = function () {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  // add edge case where if property already exist we return error
  // if key in graphy
  if (node in this) {
    // return error
    return `error node ${node} already exist`;
  } else {
    // make property where key is node and empty array is value
    this[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  // loop through graph object --> use key in obj
  // if has property of node
  // return true
  return (node in this);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  // delete the property
  // loop over every property of Graph
  delete this[node];

  for (var key in this) {
    for (var i = 0; i < this[key].length; i++) {
      if (this[key][i] === node) {
        this[key].splice(i, 1);
      }
    }
  }
  // check to see if array contains node
  // if it does delete node from array
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  // access the array of fromNode
  var found = false;
  for (var i = 0; i < this[fromNode].length; i++) {
    // loop through the array and check for toNode
    if (this[fromNode][i] === toNode) {
      found = true;
    }
  }
  return found;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  // access array value of fromnode
  // push tonode key into fromnode
  this[fromNode].push(toNode);
  // access array value of tonode
  // push fromnode key into tonode
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  // access array in fromnode
  // delete tonode from the fromnode array
  // access array in tonode
  // delete fromnode from the tonode array
  for (var i = 0; i < this[fromNode].length; i++) {
    if (this[fromNode][i] === toNode) {
      this[fromNode].splice(i, 1);
    }
  }

  for (var j = 0; j < this[toNode].length; j++) {
    if (this[toNode][j] === fromNode) {
      this[toNode].splice(j, 1)
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  // go through each property and then apply the cb
  // use for in loop
  // call function on each key

  for (var key in this) {
    if (typeof this[key] !== 'function') {
      // console.log(key);
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
