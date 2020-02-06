var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {}
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};
var i = 0;
var recentlyAddedIndex;
var stackMethods = {};

stackMethods.push = function(value) {
  // have a counter out of function to use as the key
  // assign key = index, and value = the argument
  this.storage[i] = value;
  // increase the counter
  recentlyAddedIndex = i;
  i ++;
};

stackMethods.pop = function() {
  // we have to track the most recently added item

  // keep track of item to be deleted
  var toDelete = this.storage[recentlyAddedIndex];
  // delete the property that has recently been added
  delete this.storage[recentlyAddedIndex];
  recentlyAddedIndex --;
  return toDelete;

};

stackMethods.size = function() {
  var size = 0;
  for (key in this.storage) {
    size++;
  }
  return size;
};


