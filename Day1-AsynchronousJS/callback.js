//Callbacks
function sum(a,b){
console.log(a+b)
}

function calculator(a,b,sumCallback){
   sumCallback(a,b) 
}

calculator(2,3,sum)
//a function is passed as an argument to another function 
//this is called a callback function
// () are not used when passing the function as an argument as it will be called immediately


calculator(1,2,(a,b)=>{console.log(a+b)})


