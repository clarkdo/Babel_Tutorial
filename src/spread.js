(function withoutSpread(){
    function demo(x, y, z) { 
        console.log(arguments.length);
    }
    var args = [0, 1, 2];
    demo.apply(null, args);
})();

(function withSpread(){
    function demo(x, y, z) { 
        console.log(arguments.length);
    }
    var args = [0, 1, 2];
    demo(...args);
    demo(-1 , ...args, 3, ...[2]);
})();

var array = [1, 2];
array = [0, ...array, 3];
var following = [4, 5, 6];
array.push(...following);