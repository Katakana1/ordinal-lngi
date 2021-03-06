var t = 0;
var final = "Γ<sub>0</sub>";

var bits = [
  [[""],[""]],
  [["ω+"],[""]],
  [["ω<sup>2</sup>+"],[""]],
  [["ω<sup>3</sup>+"],[""]],
  [["ω<sup>"],["</sup>"]],
  [["ε<sub>0</sub>+"],[""]],
  [["ε<sub>0</sub>*("],[")"]],
  [["ε<sub>0</sub><sup>"],["</sup>"]],
  [["ε<sub>1</sub>*("],[")"]],
  [["ε<sub>1</sub><sup>"],["</sup>"]],
  [["ε<sub>2</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>0</sub>+"],[""]],
  [["ζ<sub>0</sub>*("],[")"]],
  [["ζ<sub>0</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>1</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>"],["</sub>"]],
  [["η<sub>"],["</sub>"]],
  [["φ<sub>5</sub>("],[")"]],
  [["φ<sub>6</sub>("],[")"]],
  [["φ<sub>"],["</sub>(0)"]]
];

var limits = [
  0,
  2000,
  5000,
  10000,
  15000,
  30000,
  40000,
  50000,
  70000,
  80000,
  100000,
  120000,
  175000,
  185000,
  195000,
  210000,
  240000,
  250000,
  270000,
  320000,
  350000,
  360000,
  365000,
  500000
];

var offsets = [
  0,
  0,
  0,
  0,
  1600,
  0,
  2000,
  2000,
  1333.3334,
  2000,
  1333.3334,
  1500,
  0,
  2000,
  2000,
  175054.0541,
  1000,
  240013.3869,
  1500,
  0,
  0,
  0,
  1750
];

function findLimit(n){
  var i = 0;
  while(limits[i] <= n){
    i++;
  }
  return i-1;
}

function LRemainder(n){
  var i = 0;
  while(limits[i] <= n){
    i++;
  }
  return ((n-limits[i-1])/(limits[i]-limits[i-1]))*(limits[i]-offsets[i-1])+offsets[i-1];
}

function parse(n){
  if(findLimit(n) == 0){
    return Math.floor(1/(1-(n/2000)))-1;
  } else if(n < limits[limits.length-1]) {
    return bits[findLimit(n)][0] + parse(LRemainder(n)) + bits[findLimit(n)][1];
  } else {
    return final;
  }
}

setInterval(function(){
  t++;
  document.getElementById("num").innerHTML = parse(t);
},10);
