var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.someInstance = {};
  this.storage = {};
  this.i = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i++;
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  var counter = 0;
  for (var key in this.storage) {
    counter ++;
  }
  return counter;
};

