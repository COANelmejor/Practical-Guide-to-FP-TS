import { pipe } from 'fp-ts/lib/function';

// First create the functions to pipe them together

/**
 * # Add 1
 * 
 * Add 1 to a number that is passed in
 * 
 * @param x 
 * @returns {number} value of x + 1
 */
function add1(x: number): number {
  return x + 1;
}

/**
 * # Multiply by 2
 * 
 * Multiply a number by 2
 * 
 * @param x 
 * @returns {number} value of x * 2
 */
function multiply2(x: number): number {
  return x * 2;
}

/**
 * # Number to String
 * 
 * Convert a number into a string
 * 
 * @param num 
 * @returns 
 */
function numberToString(num: number): string {
  return `${num}`
}

/**
 * # Log Value
 * 
 * Log a value to the console, and return it
 * 
 * @param value 
 * @returns 
 */
function log(value: any): any {
  console.log(value);
  return value;
}

/**
 * # Evaluate value
 * 
 * Log a value to the console, and return the value
 * 
 * @param x 
 * @returns 
 */
function typeEvaluator(x: any): any {
  console.log(typeof x);
  return x;
}

pipe(1, add1, multiply2, log, typeEvaluator); // 4
pipe(1, add1, multiply2, numberToString, log, typeEvaluator); // 4
pipe(2, add1, multiply2, numberToString, log, typeEvaluator); // 6