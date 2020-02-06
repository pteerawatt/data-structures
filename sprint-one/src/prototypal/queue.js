var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  return someInstance;
};

var queueMethods = {
  storage: {},
  i: 0
};

queueMethods.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i++;
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
}

queueMethods.size = function() {
  var size = 0;
  for (key in this.storage) {
    size++;
  }
  return size;
}