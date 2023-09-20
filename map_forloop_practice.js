//-----The For/Of Loop-----
// Properties
/* 
1. The JavaScript for/of statement loops through the values of an iterable objects.
2. for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
3. Variable can be declared with const, let, or var.
4. It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/

const cars = ["BMW","MERCEDES","ROLLS ROYCE","F1","TOYOTA"]
const myString = "JASVINDER SINGH"

// looping through cars using for in
for(var x in cars){
    console.log(cars[x])
}

// looping through cars Array using for of
for(var x of cars){
    console.log(x)
}

// looping through string
for(var x of myString){
    console.log(x)
}

// looping through cars using for each loop
var finalString = "";
cars.forEach(myFunction);

function myFunction(value){// this by default takes 3 parameters value, index and array but here we only have value 
    finalString += value + " ";
}
console.log(finalString)


//-----MAPS-----
// Properties
/* 
1. A Map holds key-value pairs where the keys can be any datatype.
2. A Map remembers the original insertion order of the keys.
3. A Map has a property that represents the size of the map.
4. You can create a JavaScript Map by:
   -> Passing an Array to new Map()
   -> Create a Map and use Map.set()
5. Map Methods
   -> new Map()
   -> set()
   -> get()
   -> clear()
   -> delete()
   -> has()
   -> forEach()
   -> entries()
   -> keys()
   -> values()
*/

// creating a new MAP
const fruitMap = new Map([
    ["apples", 500],
    ["oranges", 200],
    ["pineapple", 150],
    ["mango", 987],
]);

//adding new pairs to the map
fruitMap.set("kiwi",770)
fruitMap.set("guawa",590)

//updating existing values using set method
fruitMap.set("apples", 854)

// fetching a value using get method 
let a = fruitMap.get("apples")
console.log(a)

// getting the size of the map
console.log(fruitMap.size)

// checking for a specific value returns a boolean value
console.log(fruitMap.has("fjbsfb"));

// getting all the keys in one variable
const keys = fruitMap.keys();

// getting all the values in one variable
const values = fruitMap.values();

// checking the type of MAP
console.log(typeof fruitMap)

// Instance of MAP
console.log(fruitMap instanceof Map)

// entries method too get the iterator object
let pairs = fruitMap.entries()
console.log(pairs)

for(p of pairs){
    console.log(p)
}

for(item of keys){
    console.log(fruitMap.get(item))
}

// clearing the map delete all elements but map still exist
fruitMap.clear();

// deleting the map this will delete the entire map withh its element
fruitMap.delete();