'use strict'
/*
    NODE  MODULES
*/
console.log("hello FS15");
// require('./modules/module.js')
// js uzantıya gerek yok
require('./modules/module')
// default index.js arar
require('./modules/')
""
//?single function call
const testSingleFunction=require('./modules/module')
// testSingleFunction()


//?multi function
/*
const [test1,test2,test3]=require('./modules/module')
// test1()
// test2()
// test3()
test1(),  test2(), test3()
*/
const {testFunctionA:test1,testFunctionB:test2,testFunctionC:test3 }=require('./modules/module')
// testFunctionA()
test1(),  test2(), test3()
