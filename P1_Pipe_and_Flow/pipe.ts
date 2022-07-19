// Import pipe from fp-ts
import { pipe } from 'fp-ts/lib/function';

// Import functions to be used with pipe
import { add1, log, multiply2, numberToString, typeEvaluator } from './functions';

// Now pipe the functions together
pipe(1, add1, multiply2, log, typeEvaluator); // 4
pipe(1, add1, multiply2, numberToString, log, typeEvaluator); // '4'
pipe(2, add1, multiply2, numberToString, log, typeEvaluator); // '6'

// Values can be passed in. It will not change the value the variable but can be assigned.
const valueToPipe = 10;
const pipeValue = pipe(valueToPipe, add1, multiply2, numberToString, log, typeEvaluator); // '22'
console.log(valueToPipe, pipeValue); // 10 '22'

// pipe can be the return value of a function.
function pipeFunction(x: number): string {
  return pipe(x, add1, multiply2, numberToString);
}
console.log(pipeFunction(5)); // '12'

// and can be used as an arrow function
const pipeFunctionArrow = (x: number) => pipe(x, add1, multiply2, numberToString);
console.log(pipeFunctionArrow(7)); // '16'