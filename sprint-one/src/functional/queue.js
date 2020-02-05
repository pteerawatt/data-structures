var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var i = 0;
  someInstance.enqueue = function(value) {
    storage[i] = value;
    i++;

  };

  someInstance.dequeue = function() {
    var deletedItem = 'item';
    for (key in storage) {
      deletedItem = storage[key];
      delete storage[0];
    }
    return deletedItem;
  };

  someInstance.size = function() {
    var counter = 0;
    for (var key in storage) {
      counter ++;
    }
    return counter;
  };

  return someInstance;
};
