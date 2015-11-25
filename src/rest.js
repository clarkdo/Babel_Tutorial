function restParams(first, second) {
  var otherArgs = Array.prototype.slice.call(arguments, f.length);
  console.log(otherArgs.length);
}

function restParamsES6(first, second, ...otherArgs) {
  console.log(otherArgs.length);
}
