import { all } from "redux-saga/effects";
import user from './user/saga'

export default function* rootSaga() { // O * é como se fosse um async await = é uma função geradora
    return yield all([ // yield pausa e resume uma função geradora
        user,
    ])
}