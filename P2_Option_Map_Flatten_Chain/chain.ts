import { pipe, flow } from 'fp-ts/lib/function';
import * as O from 'fp-ts/lib/Option';

interface Fizz {
    buzz: string
}

interface Foo {
    bar?: Fizz
}

const foo = { bar: undefined } as Foo | undefined
const fooWithValue = { bar: { buzz: 'Hello World' } } as Foo | undefined

// Same as in the previous snippet, but with less code using `O.chain`

const pipe_foo = pipe(
    foo,
    O.fromNullable,
    O.map(({ bar }) => bar),
    O.chain(
        flow(
            O.fromNullable,
            O.map(({ buzz }) => buzz),
        ),
    ),
) // { _tag: 'None' }
console.log({pipe_foo})

const pipe_foo_with_value = pipe(
    fooWithValue,
    O.fromNullable,
    O.map(({ bar }) => bar),
    O.chain(
        flow(
            O.fromNullable,
            O.map(({ buzz }) => buzz),
        ),
    ),
)
console.log({ pipe_foo_with_value }) // { _tag: 'Some', value: 'Hello World' }