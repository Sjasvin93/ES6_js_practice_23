// object person
const person = {
    firstName : 'Jasvinder',
    middleName : 'Singh',
    lastName : 'Sandhu',
    age : 30,
};

// destructuring the object
// syntax
// {property_name:variable_name,........} = object
let {firstName : name, middleName : mName, lastName : lName, age : pAge} = person;
console.log(name,mName,lName,pAge);

// If the variables have the same names as the properties of the object, you can make the code more concise
let {firstName,middleName,lastName,age} = person;
console.log(firstName,middleName,lastName,age);

// setting default values
const car ={
    name : 'Toyota',
    model : 2015,
    price : 152000,
    owner : 'Ravi',
};
// if we left type then it will be undefined (extra variables are always undefined)
let {name : carName = 'SWIFT', model, price, owner, type = 'Diesel'} = car;
console.log(carName,model,price,owner,type);

// handling the null object destructuring error
function getObject(){
    return null;
}

// let {x, y} = getObject(); ths will throw error
let {x, y} = getObject() || {};

// nested object destructuring
const employee = {
    id : 1001,
    name : {
        firstName : 'Ravi',
        lastName : 'kumar'
    },
    department : 'backend',
    age : 23
}

let {id: emp_id, name :{
        firstName : empFirstName,
        lastName : empLastName
    },
    department : empDepartment,
    age : empAge
} = employee

console.log(emp_id,empFirstName,empLastName,empDepartment,empAge);

