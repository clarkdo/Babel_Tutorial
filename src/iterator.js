require("babel-polyfill");

var iterable = "wow";

iterable[Symbol.iterator] = function() {
  return {
    index: 0,
    next: function(){
      return index == array.length -1 ?
        {value: array[index++], done: false} :
        {done: true};
    }
  };
};
var iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); // { value: "w", done: false }
console.log(iterator.next()); // { value: "o", done: false }
console.log(iterator.next()); // { value: "w", done: false }
console.log(iterator.next()); // { value: undefined, done: true }

function* generalizableIterator(array){
    var index = 0;

    while(index < array.length){
        yield array[index++];
    }
}

var generator = generalizableIterator(['wow', 'ha']);

console.log(generator.next().value); // 'wow'
console.log(generator.next().value); // 'ha'
console.log(generator.next().done);  // true
