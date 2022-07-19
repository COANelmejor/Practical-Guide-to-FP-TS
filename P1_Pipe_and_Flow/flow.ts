// import pipe and flow to use in this
import { flow, pipe } from 'fp-ts/lib/function'

import { add1, log, multiply2, concat, numberToString } from './functions';

pipe(3, flow(add1, multiply2, numberToString, log)) // This is the pipe way
flow(add1, multiply2, numberToString, log)(3) // this is equivalent in the flow way.

//With pipe is ok to use anonymous functions
const concatWitPipe = concat(1, (n) => pipe(n, add1, multiply2, numberToString, log)) // [1, '4']
// What’s the problem with this? The problem is we have to declare n as part of an anonymous 
// function to use it with the pipe operator. You should avoid this because it puts you at risk of 
// shadowing a variable in the outer scope. It is also more verbose.

// The solution is to use the flow operator and remove the anonymous function. This works because 
// the return value of flow is a function itself. The signature of this function is number -> string
// which is exactly the same as the callback signature.
const concatWithFlow = concat(1, flow(add1, multiply2, numberToString, log)) // [1, '4']

console.log({concatWitPipe, concatWithFlow})