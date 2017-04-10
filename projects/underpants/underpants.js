// This is the proper way to start a javascript library
(function() {

// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value) {
    return value;
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    if(typeof value ==="string") return "string";
    if(value===null) return "null";
    if(Array.isArray(value)) return "array";
        return typeof value;
    };


/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.first=function(array,number){
    //if number is greater than length of the array if(number>array.length) 
    if(!Array.isArray(array)) return [];
    if(number === undefined || !number) return "a";
    if(number>array.length) return array;
    if(number<0) return [];
    if (number>0) return array.slice(0,number);
    
};

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.last = function (array, number ) {
    if(!Array.isArray(array)) return []; 
    if(number === undefined || isNaN(number)) return array[array.length-1];
    if(number < 1) return [];
    if(number > array.length) return array;
    return array.slice(array.length - number);
};


/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (collection, funky) {
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            funky(collection[i], i, collection);
        }
    } else {
        for(let key in collection) {
            funky(collection[key], key, collection);
        }
    }
    
};

/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {
var foundIndex = -1;
    for(let i = 0; i < array.length; i++) {
    if(array[i] === value && foundIndex === -1){
     return i;
        
}  
  
}
     return foundIndex;     
};

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(coll, test) {
var filtered = [];
  _.each(coll, function(value, pos, coll) {
      if (test(value, pos, coll)) {filtered.push(value); }
});
    return filtered;
};


/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, funTwo) {
var filtered = [];    
    _.filter(array, function(value, pos, array) {
        if(!funTwo(value, pos, array)) {filtered.push(value); }
    });
    return filtered;
};
/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, test) {
var myArray = [];
myArray.push(_.filter(array,test), _.reject(array,test));
return myArray;
    
};

/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
var myArray = [];    
    _.each(array, function(value, pos, array) {
        if(_.indexOf(myArray, value) === -1) { 
            myArray.push(value);
            
        }
    }); 
   return myArray; 
};

/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collect, test) {
var myArray = [];
_.each(collect, function(value, index, array){
    myArray.push(test(value,index,array));
    
});
return myArray;
};
    

/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* 
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//return an array containing the value of property each element in array.
_.pluck = function(objects, prop) {
    var myArray = [];
    _.map(objects, function(obj) {
        myArray.push(obj[prop]);
    });
    return myArray;
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, values) {
var newArray = array.indexOf(values) === -1 ? false : true ;
return newArray;
};
/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collect, action){
    var results = true;
if (typeof(action) !== "function") action = _.identity;

_.each(collect, function(value, index, array) {
    if(action(value, index, array) === false) {
        results = false;
    }
});
        return results;
};


/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collect, action) {
var results = false;
    if(action === undefined) {
        action = _.identity;
    }
_.each(collect, function(value, index, array) {
    if(action(value, index, array) === true) {
        results = true;
    }
});
        return results;    
};

/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.extend = function(ob1) {
         _.each(arguments, function(ob2){
             _.each(ob2, function(value, key, collection){
                 ob1[key] = value;
             });
         });
         return ob1;
     };

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// reduce=function(col,fun,seed){
//   let combined=seed;// created a new var and assigned it to seed;
//   for(let i=0; i<col.length;i++){
//      combined=col[0];//combined is now equal to col[0]
//     combined=fun(combine,col[i],i,col); // calling the function
//   } return combined;
// }
 
 _.reduce = function(col, fun, seed) {
 let combined=seed;
 let i=0;
   if(combined===undefined){
      combined=col[0]; 
       i++
   }
   for(; i<col.length;i++){
    
    combined=fun(combined,col[i],i,col);
   }  return combined;
 }

// This is the proper way to end a javascript library
}());
