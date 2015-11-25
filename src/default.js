function withoutDefaults(value, array) {
  value = value || 1;
  array = array || [];
  array.push(value);
  return array;
}

function withDefaults(value = 1, array = []) {
  array.push(value);
  return array;
}


function withFuncDefaults(value = param()) { 
   return value;
}

function param(){
  return {num : 1};
}

function gogogo(one, 
                two = one + ",", 
                three = two + " ..") {
  return [one, two, three]; 
}