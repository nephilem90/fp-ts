import { isSome } from 'fp-ts/lib/Option';
import { User } from './user';
import { option as O } from 'fp-ts';
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/function'
import { IRepository } from './i-repository';

const repository: IRepository<User> = {
    async save(entity: User) {
        console.log(entity);
        return entity;
    }
}

const user = User.fromAddress('pluto@emai.com');

O.fold(
    () => Promise.reject("user non inserito"),
    (u: User) => repository.save(u)
)(user).then(u => console.log("ok"));

// const userE = pipe(
//     user,
//     E.fromOption(() => new Error("cazzo"))
// )

// console.log(userE)