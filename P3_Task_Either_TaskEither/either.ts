import { flow, pipe } from 'fp-ts/lib/function'
import * as Password from './password_either'
import * as crypto from 'crypto'
import * as E from 'fp-ts/lib/Either'

const pipeline = flow(
  Password.of,
  Password.validate({ minLength: 8, capitalLetterRequired: true }),
  E.map(
    Password.hash((value) =>
      crypto.createHash('md5').update(value).digest('hex'),
    ),
  ),
)

console.log(pipe('pw123', pipeline));
console.log(pipe('pw123longword', pipeline));
console.log(pipe('Password123', pipeline));