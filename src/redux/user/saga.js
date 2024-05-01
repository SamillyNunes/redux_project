import { all, takeEvery } from "redux-saga/effects";

// tem que ter o mesmo nome do action
function* fetchUsers(){
    console.log('Chamou dentro do saga!');
}

export default all([
    takeEvery("user/fetchUsers", fetchUsers),
]);

