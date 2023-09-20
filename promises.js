//-----Promises-----
// Properties
/* 
1. A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".
2. "Producing Code" can take some time and "Consuming Code" must wait for the result.
3. A JavaScript Promise object can be:
   -> Pending
   -> Fulfilled
   -> Rejected
4. The Promise object supports two properties: state and result.
5. While a Promise object is "pending" (working), the result is undefined.
6. When a Promise object is "fulfilled", the result is a value.
7. When a Promise object is "rejected", the result is an error object.
8. Promise.then() takes two arguments, a callback for success and another for failure.
9. Both are optional, so you can add a callback for success or failure only.
10. catch() method to schedule a callback to be invoked when the promise is rejected.
11. Place the code that you want to execute in the finally() method whether the promise is fulfilled or rejected.
*/

// Example
let myPromise = new Promise(function(myResolve, myReject){
   var toggle = 0;
   if(toggle == 0){
      myResolve("Successfull- The object state is fullfilled")
   }else{
      myReject("Unsuccessfull- The object state is rejected")
   }
});

myPromise.then(
   function(value) {resultDisplay(value)},
   function(error) {resultDisplay(error)}
);

function resultDisplay(result){
   console.log(result);
}

// Fetching the file using promise
let filePromise = new Promise(function(myResolve, myReject){
   let req = new XMLHttpRequest();
   req.open('GET','myfile.htm');
   req.onload = function(){
      if(req.status == 200){
         myResolve(200);
      }else{
         myReject(420)
      }
   };
   req.send();
});

filePromise.then(
   function(value){fileHandler(value)},
   function(error){fileHandler(error)}
);

function fileHandler(status){
   if(status == 200){
      console.log("FILE SUCCESSFULLY RETURNED")
   }else{
      console.log("FILE NOT FOUND")
   }
}

// Promise chaining
let p = new Promise((resolve, reject) => {
   let x = "success"
   if(x == "success"){
      resolve(200)
   }else{
      reject(420)
   }

});

p.then((result) => {
   console.log(result);
   return result * 2;
}).then((result) => {
   console.log(result);
});

// multiple handlers
let letPromise = new Promise((resolve, reject) => {
   let x = "success"
   if(x == "success"){
      resolve(200)
   }else{
      reject(420)
   }
});

p.then((result) => {
   console.log(result);
   return result * 2;
})

p.then((result) => {
   console.log(result);
   return result * 3;
})

p.then((result) => {
   console.log(result); 
});

// returning a new promise
let newPromise = new Promise(function(resolve,reject){
   let members = 100;
   if(members > 90){
      resolve(100)
   }else{
      reject(20)
   }
});

newPromise.then(
   (result) => {
      if(result == 100){
         return new Promise((resolve, reject) => {
            resolve(result + 100)
         })
      }
}).then((newResult) => {
   console.log(newResult);
})