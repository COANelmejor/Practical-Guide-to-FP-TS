import { pipe } from 'fp-ts/lib/function';

function add1(x: number): number {
  return x + 1;
}

function multiply2(x: number): number {
  return x * 2;
}

function toString(num: number): string {
  return `${num}`
}

function log(x: any): any {
  console.log(x);
  return x;
}

function typeEvaluator(x: any): any {
  console.log(typeof x);
  return x;
}

pipe(1, add1, multiply2, log, typeEvaluator); // 4
pipe(1, add1, multiply2, toString, log, typeEvaluator); // 4
pipe(2, add1, multiply2, toString, log, typeEvaluator); // 4