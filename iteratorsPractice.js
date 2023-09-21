// making a sequence iterator class this can be traverse using any loop
class Sequence{
    constructor(start = 0, end = Infinity, interval = 1){
        this.start = start;
        this.interval = interval;
        this.end = end;
    }
    [Symbol.iterator](){
        let nextIndex = this.start;
        return {
            next : () => {
                if(nextIndex <= this.end){
                    let result = {value: nextIndex, done: false};
                    nextIndex += this.interval;
                    return result;
                }
                return {value: undefined, done: true};
            }
        }
    }
}

// Iterating the sequence object
let numbers = new Sequence(2, 50, 2);

// we can also directly access the symbol.iterator method
let iterator = numbers[Symbol.iterator]();
result = iterator.next();

while(!result.done){
    console.log(result.value);
    result = iterator.next();
}

// for(num of numbers){
//     console.log(num);
// }