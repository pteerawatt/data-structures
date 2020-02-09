var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // if theres no head node
    var newNode = Node(value);


    if (list.head === null) {
      // set this node to tail and value
      list.head = newNode;
      list.tail = newNode;
    } else {
      // point previous next to this node
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    var rmHead = list.head.value
    list.head = list.head.next
    return rmHead;
  };

  list.contains = function (target) {
    // while we are not at the tail
    var currentNode = list.head;
    // check to see if value at the node is = target
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
      // if we we find a match return true;
      // else we move on to the next node;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
