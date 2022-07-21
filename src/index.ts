// This script is a placeholder to make sure that the typescript compiler is working and the `fp-ts`
// library is installed correctly.
// It is an example of fp-ts usage of Pipe and Array.

import * as A from "fp-ts/Array";

import { pipe } from "fp-ts/function";

pipe(
    [1, 2, 3, 4],
    (value) => {
        console.log("Installation is working correctly. (•◡•)");
        return value;
    },
    A.map((x) => x + 1),
    console.log,
);
