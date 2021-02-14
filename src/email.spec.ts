import { isNone, none } from 'fp-ts/lib/Option';
import { option as O } from 'fp-ts';
import { Email } from './email';
import { throwError } from 'fp-ts/lib/Either';

it('should be return error', () => {
    expect(Email.fromAddress('test')).toBe(none)
})