import { Email } from './email';
import { isSome, Option } from 'fp-ts/lib/Option';
import { option as O } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { Either } from 'fp-ts/lib/Either';
import * as E from 'fp-ts/lib/Either';

export class User {
    private constructor(
        readonly email: Email,
    ) { }

    static fromAddress(address: string): Option<User> {
        return pipe(
            Email.fromAddress(address),
            O.map(e => new User(e))
        )
    }

    static fromAddressE(address: string): Either<Error,User> {
        return pipe(
            Email.fromAddress(address),
            O.map(e => new User(e)),
            E.fromOption(()=> new Error("invalid email"))
        )
    }
}