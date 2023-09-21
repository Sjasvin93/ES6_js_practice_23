let xPromise = new Promise(function(response,reject){
    let x = 10;
    while(x >= 0){
        x += 5;
        if(x == 60){
            response(x)
            break;
        }else if(x == 50){
            reject(x)
            break;
        }
    }
});

xPromise.then(
    function(value){handleXPromise(value)},
    function(error){handleXPromise(error)}
);

function handleXPromise(output){
    console.log(output);
}

// synchronous call back function
function isOdd(num){
    return num % 2 != 0;
}

function isEven(num){
    return num % 2 == 0;
}

function filter(numbers, callback){
    let result = []
    for(item of numbers){
        if(callback(item)){
            result.push(item)
        }
    }
    return result;
}

let numbers = [10, 11, 158, 35, 69, 74, 100, 5, 25]

console.log(filter(numbers,isOdd));
console.log(filter(numbers,isEven));

// passing as anonymous function
console.log(filter(numbers,(number) => number % 2 != 0));
console.log(filter(numbers,(number) => number % 2 == 0));

