var a = 221;
var b = a - 6;
a = 4;
// const = > 변하지 않는 변수 앞에
// let, var => 변해도 되는 변수 앞에
console.log(b, a);

//Object, Array 
const coneseo = {
  name : "coneseo",
  age : 29,
  isHandsome : true,
  favMovies : ["the king of the rings", "big bang theory"],
  favFood : [{name : "burger", isFatty : true}, {name : "gummies",
  isFatty : true}]
}

console.log(coneseo.favFood);