import { pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';

const foo1 = {
    bar: 'hello foo1_pipe',
}

const foo1_pipe = pipe(foo1, (f) => f.bar) // hello
console.log({foo1_pipe})

interface Foo {
    bar: string
}

const foo2 = {
    bar: 'hello foo2_pipe',
} as Foo | undefined

const foo2_pipe = pipe(foo2, (f) => f?.bar) // hello
console.log({foo2_pipe})

// Because `rab` does not exist, `foo2` could resolve as an error.
// const foo_pipe_error = pipe(foo2, ({ bar }) => bar) 
// -> Property 'bar' does not exist on type 'Foo | undefined'.ts(2339)
// It is because the compiler can't destructure an object that is possibly undefined

// With `O.fromNullable` creates this container object
const foo3_pipe_null = pipe(foo2, O.fromNullable) // { _tag: 'Some', value: { bar: 'hello foo2_pipe' } }
console.log({ foo3_pipe_null })

// Then we can use `O.map` to get the value
const foo3_pipe = pipe(foo2, O.fromNullable, O.map(({ bar }) => bar)) // { _tag: 'Some', value: 'hello' }
console.log({foo3_pipe})

const foo4_pipe = pipe(undefined, O.fromNullable, O.map(({ bar }) => bar)) // { _tag: 'None' }
console.log({foo4_pipe})