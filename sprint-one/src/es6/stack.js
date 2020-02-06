class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.someInstance = {
      storage: {},
      i: 0,
      recentlyAddedIndex: null
    };
  }

  push(value) {
    this.someInstance.storage[this.someInstance.i] = value;
    this.someInstance.recentlyAddedIndex = this.someInstance.i;
    this.someInstance.i ++;
  }

  pop() {
    var toDelete = this.someInstance.storage[this.someInstance.recentlyAddedIndex];
    delete this.someInstance.storage[this.someInstance.recentlyAddedIndex];
    this.someInstance.recentlyAddedIndex --;
    return toDelete;
  }

  size() {
    var size = 0;
    for (var key in this.someInstance.storage) {
      size++;
    }
    return size;
  }
}