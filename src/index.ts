// This script is a placeholder to make sure that the typescript compiler is working and the `fp-ts`
// library is installed correctly.
// It is an example of fp-ts usage of Array.

import * as A from "fp-ts/Array";

import { pipe } from "fp-ts/function";

pipe(
    [1, 2, 3, 4],
    A.map((x) => x + 1),
    console.log
);
