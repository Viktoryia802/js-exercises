// need revise

function getUpperCaseName(name) {
  return name.toUpperCase();
}

function greeting(great, name) {
  var UpperCaseName = getUpperCaseName(name);
  return great + UpperCaseName;
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var result1 = greeting("HELLO ", mentor1);
var result2 = greeting("HELLO ", mentor2);
var result3 = greeting("HELLO ", mentor3);
var result4 = greeting("HELLO ", mentor4);
var result5 = greeting("HELLO ", mentor5);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
