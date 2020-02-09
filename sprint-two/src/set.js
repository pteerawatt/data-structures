var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  // if exist, increment value
  if (item in this) {
    this[item] ++;
  } else {
  // else add item as key and 1 as value
    this[item] = 1;
  }
};

setPrototype.contains = function (item) {
  // check if item exist
  return (item in this);
};

setPrototype.remove = function (item) {
  if (item in this) {
    delete this[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
