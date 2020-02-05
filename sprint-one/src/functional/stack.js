var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var i = 0;
  var recentlyAddedIndex;
  someInstance.push = function(value) {
    // have a counter out of function to use as the key
    // assign key = index, and value = the argument
    storage[i] = value;
    // increase the counter
    recentlyAddedIndex = i;
    i ++;
  };

  someInstance.pop = function() {
    // we have to track the most recently added item

    // keep track of item to be deleted
    var toDelete = storage[recentlyAddedIndex];
    // delete the property that has recently been added
    delete storage[recentlyAddedIndex];
    recentlyAddedIndex --;
    return toDelete;

  };

  someInstance.size = function() {
    var size = 0;
    for (key in storage) {
      size++;
    }
    return size;
  };

  return someInstance;
};
