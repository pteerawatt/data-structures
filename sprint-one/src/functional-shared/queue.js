var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};
var i = 0;
var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[i] = value;
  i++;
};

queueMethods.dequeue = function() {
  var deletedItem = 'item';
  var deleted = false;
  for (key in this.storage) {
    if (!deleted) {
      deletedItem = this.storage[key];
      delete this.storage[key];
      deleted = true;
    }
  }
  return deletedItem;
};

queueMethods.size = function() {
  var counter = 0;
  for (var key in this.storage) {
    counter ++;
  }
  return counter;
};


