var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.someInstance = {};
  this.storage = {};
  this.i = 0;
  this.recentlyAddedIndex;
};

Stack.prototype.push = function(value) {
  this.storage[this.i] = value;
  this.recentlyAddedIndex = this.i;
  this.i ++;
};

Stack.prototype.pop = function() {
  var toDelete = this.storage[this.recentlyAddedIndex];
  delete this.storage[this.recentlyAddedIndex];
  this.recentlyAddedIndex --;
  return toDelete;

};

Stack.prototype.size = function() {
  var size = 0;
  for (key in this.storage) {
    size++;
  }
  return size;
};



