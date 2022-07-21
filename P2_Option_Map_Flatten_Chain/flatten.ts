import { pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';

interface Fizz {
    buzz: string
}

interface Foo {
    bar?: Fizz
}

const foo = { bar: undefined } as Foo | undefined

const pipe_1 = pipe(foo, (f) => f?.bar?.buzz) 
console.log({pipe_1}) // undefined

// ------------------------------------------------------------------------------

// With this we get the same problem as in the previous snippet (./option.ts:23)
/*
pipe(
    foo,
    O.fromNullable,
    O.map(({ bar: { buzz } }) => buzz),
)
*/ // Property 'buzz' does not exist on type 'Fizz | undefined'.ts(2339)

// ------------------------------------------------------------------------------

const pipe_2 = pipe(
    foo,
    O.fromNullable,
    O.map(({ bar }) =>
        pipe(
            bar,
            O.fromNullable,
            O.map(({ buzz }) => buzz),
        ),
    ),
) 
console.log({pipe_2}) // { _tag: 'Some', value: { _tag: 'None' } }

// With the previous code we get a very verbose response.

// ------------------------------------------------------------------------------

// We can user `O.flatten` to get a more concise response.

const pipe_3_flatten_1 = pipe(
    foo,
    O.fromNullable,
    O.map(({ bar }) =>
        pipe(
            bar,
            O.fromNullable,
            O.map(({ buzz }) => buzz),
        ),
    ),
    O.flatten,
)
console.log({pipe_3_flatten_1}) // { _tag: 'None' }

// ------------------------------------------------------------------------------

// Another example with with a value that is not undefined
const fooWithValue = { bar: { buzz: 'Hello World' } } as Foo | undefined
const pipe_3_flatten_2 = pipe(
    fooWithValue,
    O.fromNullable,
    O.map(({ bar }) =>
        pipe(
            bar,
            O.fromNullable,
            O.map(({ buzz }) => buzz),
        ),
    ),
    O.flatten,
)
console.log({ pipe_3_flatten_2 }) // { _tag: 'Some', value: 'Hello World' } 