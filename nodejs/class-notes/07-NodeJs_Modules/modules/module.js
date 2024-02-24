'use strict'
console.log( "this line from modules");

//?single function
/*
const testFunction=function(){
        console.log("this is function");
}
module.exports=testFunction
*/
module.exports=function(){
    console.log("this is function");
}


//?multi function
const testFunctionA=function(){
    console.log("this is function A");
}
const testFunctionB=function(){
    console.log("this is function B");
}
const testFunctionC=function(){
    console.log("this is function C");
}
// array
/*
module.exports=[
    testFunctionA,
    testFunctionB,
    testFunctionC
]
*/
// obj
module.exports={
    testFunctionA:testFunctionA,
    testFunctionB:testFunctionB,
    testFunctionC:testFunctionC
}
