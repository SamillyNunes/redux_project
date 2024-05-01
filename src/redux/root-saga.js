import { all } from "redux-saga/effects";

import user from './user/saga';

// Essa funcao vai ser responsavel por carregar todos os sagas que se tem
// function* eh uma funcao geradora. Eh como se criasse uma funcao async
export default function* rootSaga(){
    return yield all([
        user,
    ]);
}