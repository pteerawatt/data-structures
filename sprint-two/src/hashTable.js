// in hash table we have the outter most storage as an array <storage>
  // at each index of the storage we have a bucket
    // at each index of the bucket we have a tuble
      // a tuple is a array with 2 index. index 0 is the key, index 1 is the value;

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check to see if bucket does exist
  var bucket = this._storage.get(index);
  
  if (!bucket) {
    // if bucket doesn exist we make one and insert it
    bucket = []
    this._storage.set(index, bucket);
  }
  var foundKey = false;
  // if bucket exist
    // check to see if theres already a tuple with key k
  for (var i = 0; i < bucket.length; i++) {
    // if there is one we just update it
    if(bucket[i][0] === k) {
      bucket[i][1] = v;
      foundKey = true;
      break;
    }
  }  
  if (!foundKey) {
    // else we make a new tuple and push to bucket
    bucket.push([k, v]);   
  }
  
  //console.log(bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check the bucket at index of storage
  var bucket = this._storage.get(index);

  // loop over the bucket to see if key exist
  for (var i = 0; i < bucket.length; i++) {
  // if key exist return the value
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // loop through bucket
  if (!bucket) {
    return 'Bucket doesnt exist';
  }
  for (var i = 0; i < bucket.length; i++) {
  // find tuple
    if (bucket[i][0] === k) {
  // delete tuple
      bucket[i].splice(1, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


