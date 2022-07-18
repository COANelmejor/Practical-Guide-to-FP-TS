import * as A from "fp-ts/Array";

import { pipe } from "fp-ts/function";

pipe(
    [1, 2, 3, 4],
    A.map((x) => x + 1),
    console.log
);
