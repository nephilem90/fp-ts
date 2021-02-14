import { Email } from './email';
import { isSome, Option } from 'fp-ts/lib/Option';
import { option as O } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';

export class User {
    private constructor(
        readonly email: Email,
    ) { }

    static fromAddress(address: string): Option<User> {
        return pipe(
            address,
            O.fromNullable,
            O.map(a => Email.fromAddress(a)),
            O.filter(e => isSome(e)),
            O.flatten,
            O.map(e => new User(e))
        )
    }


    // static fromAddress(address: string): User {
    //     const x = O.fold(
    //         () => new Error(""),
    //         e => new User(e))
    //         (Email.fromAddress(address))
    // }
}