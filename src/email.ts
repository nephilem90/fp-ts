import { none, option, Option, some } from "fp-ts/lib/Option";
import { option as O } from "fp-ts"
import { pipe } from "fp-ts/lib/function";

export class Email {
    private constructor(
        readonly address: string
    ) { }

    static fromAddress(address: string): Option<Email> {
        return pipe(
            address,
            O.fromNullable,
            O.filter(a => a.includes('@')),
            O.filter(a => a.split('@').length === 2),
            O.filter(a => a.split('@')[0].length > 3),
            O.filter(a => a.split('@')[1].split('.').length === 2),
            O.filter(a => a.split('@')[1].split('.')[0].length > 2),
            O.filter(a => a.split('@')[1].split('.')[1].length > 2),
            O.map(a => new Email(a))
        )
    }
}