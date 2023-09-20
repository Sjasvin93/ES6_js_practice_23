//-----SETS-----
// Properties
/* 
1. A JavaScript Set is a collection of unique values.
2. Each value can only occur once in a Set.
3. A Set can hold any value of any data type.
4. You can create a JavaScript Map by:
   -> Passing an Array to new Set()
   -> Create a new Set and use add() to add values
   -> Create a new Set and use add() to add variables
5. Set Methods
   -> new Set()
   -> add()
   -> delete()
   -> has()
   -> clear()
   -> forEach()
   -> values()
   -> keys()
   -> entries()
*/

// Creating a new set by passing the array
let x = ["a","b","c","d"];
const set = new Set(x);

//creating a set using the set constructor parameters
const set2 = new Set([1,2,3,4,5,6]);

// creating an empty set
const num_set = new Set();

// Adding elements to the set usind add method
num_set.add(10);
num_set.add(20);
num_set.add(30);
num_set.add(40);

// Size of the set
console.log(num_set.size);

// fetching all the values of the set
let values = num_set.values();
console.log(values);

// we can fetch the values using key function also this makes compatible with maps
let items = num_set.keys();
console.log(items);

// we can fetch values using entries method also but it returns [value,value]
let pairs = num_set.entries();
console.log(pairs);

// type of numsets
console.log(typeof num_set);

// instance of num sets
console.log(num_set instanceof Set);

// getting an iterator for this set
// we can use values variable defined earlier
for(val of values){
    console.log(val + 10);
}

// using forEach with sets
num_set.forEach(myFunction);

function myFunction(value){
    console.log("This is val" + value)
}

//-------CLASSES IN JAVA------
/* 1. JavaScript Classes are templates for JavaScript Objects.
   2. Use the keyword class to create a class.
   3. A JavaScript class is not an object. It is a template for JavaScript objects.
*/

// creating a class
class car{    
    car(name, model){
        this.name = name;
        this.model = model;
    }
    getName(){
        return this.name;
    }
    getModel(){
        return this.model;
    }
}

const myCar = new car("BMW", "z4");
console.log(myCar.getName());

// new string methods
let myString = "my name is jasvinder singh and I am saying hello"
console.log(myString.includes("hello"));
console.log(myString.startsWith("hello"));
console.log(myString.endsWith("hello"));

// new Array methods
