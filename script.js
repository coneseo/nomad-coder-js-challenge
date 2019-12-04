//var a = 221;
//var b = a - 6;
//a = 4;
// const = > 변하지 않는 변수 앞에
// let, var => 변해도 되는 변수 앞에
//console.log(b, a);

//Object, Array 
const coneseo = {
  name : "coneseo",
  age : 29,
  isHandsome : true,
  favMovies : ["the king of the rings", "big bang theory"],
  favFood : [{name : "burger", isFatty : true}, {name : "gummies",
  isFatty : true}]
}
let a = ["a","b"];
const c = [a, "1", "2"]
console.log(c);
const array = ["a", "b", {key : "sdf"}]
console.log(array[2].key);

function sayHello(name, age){
  console.log("hello ",name," you have ",age)
  return `Hello ${name} you are ${age} old`;
}

const greetNicolas = sayHello("coneseo", 29);

console.log(greetNicolas);

const calculator = {
  plus : function(a,b ){
    return a+b;
  },
  minus : function(a,b){
    return a-b;
  },
  multiple : function(a,b){
    return a * b;
  },
  power : function(a,b){
    return a**b;
  },
  divide : function(a,b){
    return a/b;
  }
}

const plus = calculator.plus(1,2);
console.log(plus);

console.log(calculator.power(2,5));

