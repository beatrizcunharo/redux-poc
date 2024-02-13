import { all, call, put, delay, takeLatest } from 'redux-saga/effects';
import { fetchUsersSucess, fetchUsersFailure, fetchUserByIdFailure, fetchUserByIdSuccess } from './slice';
import axios from 'axios'

function* fetchUsers () { // Tem que ter o mesmo nome da action do slice
    // API USERS: https://jsonplaceholder.typicode.com/users/
    try{
        yield delay(2000); // o yield espera a requisição (async feito na function* e await com yield)
    
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
        yield put(fetchUsersSucess(response.data)) // put dispara a action

    }catch(error){
        yield put(fetchUsersFailure(error.message))
    }
}

function * fetchUserById(action) {
    try{
        const userId = action.payload;
        yield delay(2000); // o yield espera a requisição (async feito na function* e await com yield)
    
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`)
        yield put(fetchUserByIdSuccess(response.data)) // put dispara a action

    }catch(error){
        yield put(fetchUserByIdFailure(error.message))
    }
}

export default all([
    //takeEvery("user/fetchUsers", fetchUsers) // Toda vez que invoca a ação, o takeEvery é ativado. Nome do slice e o nome da action
    takeLatest("user/fetchUsers", fetchUsers), // Pega a última ação. Caso clique muitas vezes no botão pra chamar a ação, ele pega apenas a última. Isso melhora a performance
    takeLatest("user/fetchUserById", fetchUserById)
])