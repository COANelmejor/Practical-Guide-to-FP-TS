// Import pipe from fp-ts
import { pipe } from 'fp-ts/lib/function';

// Import functions to be used with pipe
import { add1, log, multiply2, numberToString, typeEvaluator } from './functions';

// Now pipe the functions together
pipe(1, add1, multiply2, log, typeEvaluator); // 4
pipe(1, add1, multiply2, numberToString, log, typeEvaluator); // '4'
pipe(2, add1, multiply2, numberToString, log, typeEvaluator); // '6'