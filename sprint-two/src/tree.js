var Tree = function (value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  // create new tree and set value to value
  // use object.create assigned to varible
  // baby tree

  var babyTree = Object.create(treeMethods);
  babyTree.value = value;
  babyTree.children = [];
  this.children.push(babyTree);
};

treeMethods.contains = function (target) {
  // check outermost tree branch --> newtree
  // if newtree.value = target --> return true
  var found = false;
  var checkBabyTrees = function (childArray) {
    for (var i = 0; i < childArray.length; i++) {
      if (childArray[i].value === target) {
        found = true;
        break;
      } else {
        if (childArray[i].children.length > 0) {
          checkBabyTrees(childArray[i].children);
        }
      }
    }
  };

  checkBabyTrees(this.children);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */