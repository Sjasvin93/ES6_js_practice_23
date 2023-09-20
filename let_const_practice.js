//-----let keyword-----
// Properties
/* 
1. Variables defined with let cannot be Redeclared
2. Variables defined with let must be Declared before use
3. Variables defined with let have Block Scope
4. let does not bind to this(object).
5. Redeclaring a variable with let, in another block, IS allowed
6. We can reassign the let variables
7. let are not hoisted.
*/

let x = 10
// here x is 10
// block scope of let variables
{
    let x = 20
    // here x is 20
}
// here x is 10
console.log(x)

//-----const keyword-----
// Properties
/* 
1. Variables defined with const cannot be Redeclared
2. Variables defined with const cannot be Reassigned
3. Variables defined with const have Block Scope
4. const does not bind to this(object).
5. Redeclaring a variable with const, in another block, IS allowed
6. We can't reassign the const variables
7. const variables are hoisted in JavaScript. However, they are hoisted without a default value. This means that you cannot access them before they are initialized.
8. const variables must be assigned a value when they are declared
9. Using a const variable before it is declared will result in a ReferenceError
*/

const y = 'i10'
// here y is i10
// block scope of const variables
{
    const y = 'i20'
    // here y is i20
}
// here y is i10
console.log(y)

//------ CONSTANT ARRAY-------
// Properties
/* 
1. We can change the element of the const array
2. We can't reassign the constant array
*/

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// ERROR
// cars = ["Toyota", "Volvo", "Audi"];

//------ CONSTANT OBJECT-------
// Properties
/* 
1. We can change the properties of the const object
2. We can't reassign the constant object
*/

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// ERROR
// car = {type:"Volvo", model:"EX60", color:"red"};