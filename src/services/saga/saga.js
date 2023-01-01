import { takeEvery, put } from 'redux-saga/effects'
import { GET_TODOS, SET_TODOS, ADD_TODO } from '../constants'

const BASE_URL = process.env.REACT_APP_BASE_URL

function* getTodos() {
    let todos = yield fetch(`${BASE_URL}/todos`)
    todos = yield todos.json()
    yield put({ type: SET_TODOS, data: todos })
}

function* addTodo(data) {
    let todo = yield fetch(`${BASE_URL}/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.data)
    })
    todo = yield todo.json()

}

function* todoSaga() {
    yield takeEvery(GET_TODOS, getTodos)
    yield takeEvery(ADD_TODO, addTodo)
}

export default todoSaga
