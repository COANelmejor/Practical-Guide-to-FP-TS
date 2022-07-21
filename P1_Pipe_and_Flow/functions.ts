// Functions that will be used in the pipe and flow section of the course.

/**
 * # Explanation
 * 
 * Every function should return a value that can be used by pipe and flow.
 * 
 */

/**
 * # Add 1
 * 
 * Add 1 to a number that is passed in
 * 
 * @param x 
 * @returns {number} value of x + 1
 */
export function add1(x: number): number {
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
export function multiply2(x: number): number {
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
export function numberToString(num: number): string {
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
export function log(value: any): any {
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
export function typeEvaluator(x: any): any {
  console.log(typeof x);
  return x;
}

/**
 * # Concat
 * 
 * @param a Number to use
 * @param transformer Function to use to transform the number
 * @returns [{number}, {string}]
 */
export function concat(a: number, transformer: (a: number) => string): [number, string] {
  return [a, transformer(a)]
}