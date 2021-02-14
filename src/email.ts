import { none, Option, some } from "fp-ts/lib/Option";

export class Email {
    private constructor(
        readonly address: string
    ) { }

    static fromAddress(address: string): Option<Email> {
        if (address.includes('@')) return none;
        return some(new Email(address))
    }
}