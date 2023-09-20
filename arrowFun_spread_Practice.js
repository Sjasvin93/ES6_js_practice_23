//-----Arrow Function-----
// Definitions
/* 
1. Arrow functions allows a short syntax for writing function expressions.
2. You don't need the function keyword, the return keyword, and the curly brackets.
3. Arrow functions do not have their own this.
4. They are not well suited for defining object methods.
5. Arrow functions are not hoisted. They must be defined before they are used.
6. Using const is safer than using var, because a function expression is always a constant value.
7. You can only omit the return keyword and the curly brackets if the function is a single statement.
8. In fact, if you have only one parameter, you can skip the parentheses as well [hello = val => "Hello " + val;]
9. With arrow functions the this keyword always represents the object that defined the arrow function.
*/

// ES5
var x = function(x, y) {
    return x * y;
 }
 console.log(x(4,5))

 // ES6
 const r = (x, y) => x * y;
 console.log(r(2,3))

 let z = t => t + t;
 console.log(z(10))


