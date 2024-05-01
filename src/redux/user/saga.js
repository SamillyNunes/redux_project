import { all, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

import { onFetchUsersSuccess, onFetchUsersFailed } from "./slice";

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

export default all([
    takeEvery("user/fetchUsers", fetchUsers),
]);

