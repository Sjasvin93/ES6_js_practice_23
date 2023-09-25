function getNames(){
   let names = ['ruhi','sampat','ravi','gautam'];
   return names;
}
let [v,x,y,z] = getNames();
console.log(x,y,z);

// default value
let [a = 10, b , c=10] = [20, 30]
console.log(a,b,c);

// handling empty array assignment error 
function getCities(){
   return null;
}

// let [cA, cB, cC] = getCities() this will throw error
let [cA, cB, cC] = getCities() || [];

// Nested array destructuring
function nestedArray(){
   return [10,20,30,
      [40,50,60]
   ];
}

let [a1,a2,a3
,[
   a4,a5,a6
]] = nestedArray();

console.log(a1,a2,a3,a4,a5,a6);

// swapping variables with array destructuring
[a1, a3] = [a3, a1]
console.log(a3,a1)