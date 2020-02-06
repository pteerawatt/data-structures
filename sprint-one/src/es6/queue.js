class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.someInstance = {
      storage: {},
      i: 0
    };
  }

  enqueue(value) {
    this.someInstance.storage[this.someInstance.i] = value;
    this.someInstance.i ++;
  }

  dequeue() {
    var deletedItem = 'item';
    var deleted = false;
    for (var key in this.someInstance.storage) {
      if (!deleted) {
        deletedItem = this.someInstance.storage[key];
        delete this.someInstance.storage[key];
        deleted = true;
      }
    }
    return deletedItem;
  }

  size() {
    var size = 0;
    for (var key in this.someInstance.storage) {
      size++;
    }
    return size;
  }

}
