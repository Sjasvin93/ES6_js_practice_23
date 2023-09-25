// arrow function
let x = (num1 , num2) => num1 + num2;
console.log(x(10, 20))

let y = t => t * t
console.log(y(20))

let z = (a, b) => {return a-b}
console.log(z(45, 56))

let a = () => "Hello this is arrow function";
console.log(a())

// spread
let arr = [10,20]
function add(x, y){
    console.log(x+y);
}
add(...arr); // spread function for passing the parameters

// copying the elements into another array using spread
arr2 = [12,...arr,35,90]
for(item of arr2){
    console.log(item);
}


// maps
let fruits = new Map([
    ["apples",200],
    ["oranges",280],
    ["mangoes",395],
    ["lettuce",800]
]);

console.log(fruits.get('apples'));
fruits.set("guawa",3000)
console.log(fruits.get("guawa"));
fruits.clear();
console.log(fruits);

// sets

let fruitSet = new Set([1,'A',2,10,15.7]);
for(x of fruitSet){
    console.log(x);
}

// generators
function* generator(){
    let x = 10;
    while(x >= 0){
        yield x;
        x -= 1;
    }
}

let gen = generator();
for( item of gen){
    console.log(item);
}

// iterators
class sequence{
    constructor(start = 0, end = Infinity, interval = 2){
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    [Symbol.iterator](){
        let nextIndex = this.start;
        return{
            next : () =>{
                if(nextIndex <= this.end){
                    let result = {value:nextIndex,done:false};
                    nextIndex += this.interval;
                    return result;
                }else{
                    return {value:undefined,done:true};
                }
            }
        }
    }
}

let numbers = new sequence(2, 50, 2);

// we can also directly access the symbol.iterator method
let iterator = numbers[Symbol.iterator]();
result = iterator.next();

while(!result.done){
    console.log(result.value);
    result = iterator.next();
}

// array destructuring
function getUser(){
    return ['A','B','C','D','E'];
}

let [f,g,h,...arg] = getUser() || [];
console.log(f,g,h);
console.log(arg);

// object destructuring
const sales = {
    month: 12,
    people: 510,
    netSales : 152470000,
    profit: 15420000,
    loss: 0,
    countries: 50
}

let {month,people,netSales,profit,loss,countries} = sales || {};
console.log(month,people,netSales,profit,loss,countries);
