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
const {testFunctionA:test1,testFunctionB:test2,testFunctionC:test3,pi }=require('./modules/module')
// testFunctionA()
test1(),  test2(), test3()
console.log(pi);


// require('http') // once proje klasörü sonra gloabel ortama bakar
// require('node:http') 

require('dotenv').config() // .env file içeriğini process.env ye aktarır
console.log(process.env.PORT);
console.log(process.env.HOST);
