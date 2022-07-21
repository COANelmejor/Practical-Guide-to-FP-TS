import * as T from 'fp-ts/lib/Task'

const foo = 'asdf' // string
const bar = T.of(foo) // T.Task<string>
console.log({ bar }) // { bar: [Function (anonymous)] }
console.log(String(bar)) // function () { return Promise.resolve(a); }


// Same As
// const fdsa: T.Task<string> = () => Promise.resolve(foo)