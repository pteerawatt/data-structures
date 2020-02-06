var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  return someInstance;
};

var stackMethods = {
  storage: {},
  i: 0,
  recentlyAddedIndex: null
};

stackMethods.push = function(value) {
  this.storage[this.i] = value;
  this.recentlyAddedIndex = this.i;
  this.i ++;
};

stackMethods.pop = function() {
  var recentlyDeleted = this.storage[this.recentlyAddedIndex];
  delete this.storage[this.recentlyAddedIndex];
  this.recentlyAddedIndex--;
  return recentlyDeleted;
};

stackMethods.size = function() {
  var size = 0;
  for ( key in this.storage) {
    size++;
  }
  return size;
};
