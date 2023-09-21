// Defining a async function using async keyword
async function sum(){
    return 10 + 20;
}

// async function always return a promise so we can handle it using then
sum().then(console.log);

// returning a promise from a async function
async function processStatus(){
    return Promise.resolve('SUCCESS');
}

processStatus().then(console.log);

// using async function expression
let car = async function (){
    return {
        name: 'TOYOTA',
        model: 2015,
        type: 'DIESEL'
    }
}

console.log(car.model);

// using asyn function with arrow functions
let x = async () => {return 'HELLO'}
console.log(x);

// we can also use async with class methods
class Car
{
    Car(name){
        this.name = name;
    }
    
    async getCarName(){
        return name;
    }
}

// using await keyword inside async function
async function getUser(){
    let user = await getName();
}

function getName(){
    return 'Arun';
}

// handling error in async/await using try catch
async function say(){
    try{
        let con = await new Promise.reject('ERROR')
    }catch(error){
        console.log(error)
    }
}