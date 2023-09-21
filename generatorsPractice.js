// generator functio
function* generator(){
    console.log("This is the first execution of this function");
    yield 'ONE'; // at this point it will exit and return ONE
    console.log("This is the second execution of this function");
    yield 'SECOND'; // at this point it will exit and return SECOND
    console.log("This is the third execution of this function");
    yield 'THIRD'; // at this point it will exit and return THIRD
}

let gen = generator();

console.log(gen); // this will return generator object without any execution of the body
// generator is an iterable so to execute the body we have to use next()

result = gen.next();
console.log(result);
result = gen.next();
console.log(result);
result = gen.next();
console.log(result);
result = gen.next();
console.log(result); // this will return {undefined, done: true} indicating the end of the iterator

// we can also iterator the generator function using for loop
for(item of gen){
    console.log(item);
}

// Infinite generator
function* infiniteGenerator(){
    let count = 0;
    while(true){
        yield count++;
    }
}

let infgen = infiniteGenerator();
for(item of infgen){
    console.log(item);
}