import { all, takeLatest, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { onFetchUsersSuccess, onFetchUsersFailed, onFetchByIdSuccess, onFetchByIdFailed } from "./slice";

/// API USERS: https://jsonplaceholder.typicode.com/users/

// tem que ter o mesmo nome do action
function* fetchUsers(){
    try{

        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/");

        yield put(onFetchUsersSuccess(response.data));

    } catch (error){
        console.log(error);
        yield put(onFetchUsersFailed(error.message));

    }
}

function* fetchUserById(action){
    try {
        const userId = action.payload;
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`);

        yield put(onFetchByIdSuccess(response.data));
    } catch (error) {
        
        console.log(error);
        yield put(onFetchByIdFailed(error.message));
    }
}

// O takeEvery vai dizer que vai chamar esse middleware toda vez que ativar essa acao
/// o takeLatest pega apenas o ultimo clique/acao
export default all([
    takeLatest("user/fetchUsers", fetchUsers),
    takeEvery("user/fetchUserById", fetchUserById),
]);

